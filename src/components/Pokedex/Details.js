import React from "react"
import styled from "styled-components"
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack"
import { colorTypes, getBackgroundByTypes } from "../../helpers"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  width: 100%;
  background: ${({ background }) => background};
  height: 200px;
`

const HeaderActions = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
`

const Content = styled.div`
  margin: 0 auto;
  margin-top: -50px;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  background: white;

  & > img {
    max-width: 100%;
  }
`

const ReturnButton = styled.button`
  cursor: pointer;
  white-space: nowrap;
  background: none;
  width: 50px;
  border: none;
`

function Details(props) {
  const { pokemon, setSelectedPokemon } = props

  return (
    <Wrapper>
      <Header
        background={getBackgroundByTypes(
          pokemon.type.map((t) => colorTypes[t])
        )}
      >
        <HeaderActions>
          <ReturnButton onClick={() => setSelectedPokemon(undefined)}>
            <ArrowBack />
          </ReturnButton>
        </HeaderActions>
      </Header>
      <Content>
        <h2>
          {pokemon.name} #{pokemon.id}
        </h2>
        <img src={pokemon.ThumbnailImage} alt={`${pokemon.name} image`} />
      </Content>
    </Wrapper>
  )
}

export default Details
