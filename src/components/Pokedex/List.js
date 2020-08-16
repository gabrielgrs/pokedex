import React from "react"
import styled from "styled-components"

import { colorTypes, getBackgroundByTypes } from "../../helpers"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  max-width: 800px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Box = styled.div`
  cursor: pointer;
`

const PokemonCard = styled.div`
  border-radius: 4px;
  background: ${({ types }) => getBackgroundByTypes(types)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    max-width: 100%;
  }
`

const NameTag = styled.div`
  background: white;
  margin: 10px;
  font-weight: 600;
  border-radius: 8px;
  padding: 3px;
  color: black;
`

function List(props) {
  const { pokemons, setSelectedPokemon } = props

  const getTypes = ({ type }) =>
    type.map((currentType) => colorTypes[currentType])

  if (!pokemons?.length) return null

  return (
    <Wrapper>
      {pokemons.map((pokemon) => {
        return (
          <Box key={pokemon.id}>
            <PokemonCard
              onClick={() => setSelectedPokemon(pokemon)}
              types={getTypes(pokemon)}
            >
              <div>
                <img src={pokemon.ThumbnailImage} />
              </div>
              <NameTag>
                #{pokemon.id} - {pokemon.name}
              </NameTag>
            </PokemonCard>
          </Box>
        )
      })}
    </Wrapper>
  )
}

export default List
