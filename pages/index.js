import React from "react"
import Head from "next/head"

function PokemonsList({ list }) {
  if (!list?.length) return null

  return list.map((pokemon) => <div id={pokemon.name}>{pokemon.name}</div>)
}

function Home(props) {
  const { pokemons } = props

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PokemonsList list={pokemons} />
    </>
  )
}

export const getInitialProps = async () => {
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
