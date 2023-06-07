import React from 'react'

export default function PokemonList(props) {
  return (
    <div>
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Base Stat</th>
          <th>Effort</th>
          <th>Stat</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {props.attributes.map((pokemon) => {
          return (
            <tr key={pokemon.base}>
                <td><img src={pokemon.picture} alt='Front of pokemon'></img></td>
                <td>{pokemon.base}</td>
                <td>{pokemon.effort}</td>
                <td>{pokemon.stat}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
}
