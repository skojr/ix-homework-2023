class PokemonStats {
    constructor(abilities, moves, species, types) {
        this.abilities = abilities;
        this.moves = moves;
        this.species = species;
        this.types = types;
    }
}

class PokemonAttributes {
    constructor(base, effort, stat) {
        this.base = base;
        this.effort = effort;
        this.stat = stat;
    }
}

document.getElementById('input').addEventListener('keypress', function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
  });

async function fetchPokemon(e) {

    const inputValue = document.getElementById('input').value;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await res.json();
    const abilitiesArray = [];
    for (i=0; i<data.abilities.length; i++) {
        abilitiesArray.push(data.abilities[i].ability.name);
        }
    console.log(abilitiesArray);

    const movesArray = [];
    for (i=0; i<data.forms.length; i++) {
        movesArray.push(data.moves[i].move.name);
    }

    const species = [data.species.name];
    const picture = data.sprites.front_default;
    const name = data.name;
    const xp = data.base_experience;
    const typesArray = [];
    const stat = [];
    const effort = [];
    const base_stat = [];
    const array = [];

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
    
    for (i=0; i<data.types.length; i++) {
        typesArray.push(data.types[i].type.name);
    }

    for (i=0; i<array.length; i++) {
        
    }

    console.log(array);



    let pokemon = new PokemonStats(abilitiesArray, movesArray, species, typesArray);

    let attributes = array.map((pokemon) => {
        return new PokemonAttributes(pokemon[0], pokemon[1], pokemon[2])
      });

    console.log(pokemon);

    document.getElementById('input').value = '';

    

    resultText = document.getElementById('result');
    resultText.innerHTML = `
    <div class='card my-2 bg-dark'>
        <img class='mx-auto d-block' width=300 height=300 src='${picture}' alt=${name}></img>
        <h2 class='mb-1 text-white col-md-8 offset-md-5'>Experience Level Required: ${xp}</h2>
        <h2 class='mb-4 mt-2 text-white col-md-6 offset-md-5'>Type: ${pokemon.types}</h2> 
    </div>
    <table class="table my-3">
        <thead>
            <tr>
                <th class='bg-dark-subtle' scope="col">Abilities</th>
                <th class='bg-dark-subtle' scope="col">Moves</th>
                <th class='bg-dark-subtle' scope="col">Species</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class='bg-dark-subtle'>${pokemon.abilities[0]}, ${pokemon.abilities[1]} </td>
                <td class='bg-dark-subtle'>${pokemon.moves}</td>
                <td class='bg-dark-subtle'>${pokemon.species}</td>
            </tr>
        </tbody>
    </table>
    <table class="table my-3">
        <thead>
            <tr>
                <th class='bg-dark-subtle' scope="col">Base</th>
                <th class='bg-dark-subtle' scope="col">Effort</th>
                <th class='bg-dark-subtle' scope="col">Stats</th>
            </tr>
        </thead>
        <tbody>
        ${attributes.map((pokemon) => {
            return (
              `<tr key=${pokemon.base} class='bg-dark-subtle'>
                  <td class='bg-dark-subtle'>${pokemon.base}</td>
                  <td class='bg-dark-subtle'>${pokemon.effort}</td>
                  <td class='bg-dark-subtle'>${pokemon.stat}</td>
              </tr>`
            );
          })}
        </tbody>
    </table>
    `

    
}