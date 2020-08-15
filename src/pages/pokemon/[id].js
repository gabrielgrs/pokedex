import React from "react"
import Head from "next/head"
import Link from "next/link"

function PokemonDetails(props) {
  const { name, sprite } = props

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>Pokemon details</h1>
        <h3>{name}</h3>
        <img src={sprite} alt={`Imagem do ${name}`} />
      </div>
    </>
  )
}

PokemonDetails.getInitialProps = async ({ query }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.id}`)

  if (response.ok) {
    const data = await response.json()

    return {
      name: data.name,
      sprite: data.sprites.back_default,
    }
  }

  return {}
}

export default PokemonDetails
