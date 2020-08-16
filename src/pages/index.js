import React, { useState, useMemo } from "react"
import Head from "next/head"
import Pokedex from "../components/Pokedex"

function Home(props) {
  const { pokemons } = props

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Pokedex pokemons={pokemons} />
    </>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch("https://www.pokemon.com/br/api/pokedex/kalos")

  if (response.ok) {
    const data = await response.json()
    const pokemons = data
      .filter((x) => x)
      .reduce((acc, curr) => {
        if (acc.some((x) => x.name === curr.name)) return acc
        acc.push(curr)
        return acc
      }, [])

    return { pokemons }
  }

  return { pokemons: [] }
}

export default Home
