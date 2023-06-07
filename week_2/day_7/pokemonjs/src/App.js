import './App.css';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {PokemonStat} from './models/pokemon';
import PokemonList from './components/PokemonList';
import PokemonAbility from './components/PokemonAbility';

function App() {

  const [attributes, setAttributes] = useState([]);

  async function fetchPokemon() {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${document.getElementById('input').value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await res.json();

    const stat = [];
    const effort = [];
    const base_stat = [];
    // const picture = data.sprites.front_default;
    const abilities = data.abilities[1].ability.name;
    const array = [];

    // get items and add them to lists
    for (let i = 0; i<data.stats.length; i++) {
      stat.push(data.stats[i].stat.name);
    }

    for (let i = 0; i<data.stats.length; i++) {
      effort.push(data.stats[i].effort);
    }

    for (let i = 0; i<data.stats.length; i++) {
      base_stat.push(data.stats[i].base_stat);
    }

    for (let i = 0; i<data.stats.length; i++) {
      array.push([stat[i], effort[i], base_stat[i]]);
    }

    let arrayData = array.map((pokemon) => {
      return new PokemonStat(pokemon[0], pokemon[1], pokemon[2], abilities)
    })
    

    // console.log(data.stats[0].stat.name);
    // console.log(stat);
    // console.log(base_stat);
    // console.log(effort);
    console.log(arrayData);
    // console.log(data.name);

    // This turns the attributes (initial state) to arrayData (new state)
    setAttributes(arrayData);
    console.log(attributes);

    document.getElementById('input').value = '';

    
  }
    

  return (
    <div>
        <div className='card p-5 mt-3 mx-3 bg-dark-subtle'>
          <PokemonAbility attributes={attributes}></PokemonAbility>
          <input className='form-control' id='input' placeholder='Enter pokemon name'></input>
          <button className='btn btn-primary  my-5' onClick={fetchPokemon}>Fetch Pokemon Stats</button>
          <PokemonList attributes={attributes}></PokemonList>
        </div>
    </div>
  );
}

export default App;
