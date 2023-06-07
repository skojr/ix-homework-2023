import React from 'react'

export default function PokemonAbility(props) {
  return (
    <div>
        {props.attributes.map((ability) => {
          return (
            <h1 key={ability}>
                Abilities: {ability.ability}
            </h1>
          );
        })}
    </div>
  )
}
