import React from 'react'

export default function PokemonList(props) {
  return (
    <div>
    <table className="table mt-5">
      <thead>
        <tr>
          <th className='bg-dark-subtle'>Base Stat</th>
          <th className='bg-dark-subtle'>Effort</th>
          <th className='bg-dark-subtle'>Stat</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {props.attributes.map((pokemon) => {
          return (
            <tr key={pokemon.base} className='bg-dark-subtle'>
                <td className='bg-dark-subtle'>{pokemon.base}</td>
                <td className='bg-dark-subtle'>{pokemon.effort}</td>
                <td className='bg-dark-subtle'>{pokemon.stat}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
}
