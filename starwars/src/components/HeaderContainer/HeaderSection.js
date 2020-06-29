import React from "react"
import styled from "styled-components"
import { FaHeart } from "react-icons/fa"
import "../../App.css"

export const TitleSection = styled.h1`
    color: red;
    margin-left: 7rem;
    font-family: 'Mansalva', cursive;
    font-size: 3.3rem;
    color: rgb(109, 243, 22);
`

export const SearchSection = styled.input`
    background-color: white;
    margin-left: 15rem
    height: 2rem;
`

export const FavoriteCharacters = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    color: rgb(109, 243, 22);
    justify-content: space-between;
    cursor: pointer; 

    &:hover {
        color: gray;
    }
`

const HeaderSection = () => {
    return (
        <div className={"header-container"}>
            <TitleSection>Rick and Morty Characters</TitleSection>
            <SearchSection placeholder="search characters"/>
            <FavoriteCharacters>
                <p>Favorites</p>
                <FaHeart/>
            </FavoriteCharacters>
        </div>
    )
}

export default HeaderSection