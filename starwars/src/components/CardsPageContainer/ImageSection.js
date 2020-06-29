import React from "react"
import styled from "styled-components"

export const CharImage = styled.img`
    width: 150px;
    border-radius: 50%;
    position: relative;
    left: 3rem;
`

const ImageSection = ({ char }) => {
    return (
        <div className="image-section">
            <CharImage src={char.image}/>
        </div>
    )
}

export default ImageSection