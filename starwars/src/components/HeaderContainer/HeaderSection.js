import React from "react"
import styled from "styled-components"
import { FaHeart } from "react-icons/fa"
import "../../App.css"

export const UserSection = styled.h3`
    color: red;
    margin-left: 7rem;
`

export const SearchSection = styled.input`
    background-color: white;
    margin-left: 15rem
`

export const FavoriteCharacters = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderSection = () => {
    return (
        <div className={"header-container"}>
            <UserSection>Allan Oliveira</UserSection>
            <SearchSection placeholder="search characters"/>
            <FavoriteCharacters>
                <p>Favorites</p>
                <FaHeart/>
            </FavoriteCharacters>
        </div>
    )
}

export default HeaderSection