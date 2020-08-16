import React, { useState } from "react"

import List from "./List"
import Details from "./Details"

function Pokedex({ pokemons }) {
  const [selectedPokemon, setSelectedPokemon] = useState(undefined)

  return selectedPokemon ? (
    <Details
      pokemon={selectedPokemon}
      setSelectedPokemon={setSelectedPokemon}
    />
  ) : (
    <List pokemons={pokemons} setSelectedPokemon={setSelectedPokemon} />
  )
}

export default Pokedex
