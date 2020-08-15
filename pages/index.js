import React from "react"

function Home(props) {
  const { pokemons } = props

  if (!pokemons?.length) return "Carregando"

  return pokemons.map((pokemon) => <div id={pokemon.name}>{pokemon.name}</div>)
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokedex/2")

  if (response.ok) {
    const data = await response.json()
    const pokemons = data.pokemon_entries.map((p) => ({
      name: p.pokemon_species.name,
    }))

    return { props: { pokemons } }
  }

  return { props: {} }
}

export default Home
