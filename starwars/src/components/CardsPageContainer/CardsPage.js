import React from "react"
import Character from "./Character"

const CardsPage = ({ data }) => {
    return (
        <div className="cards-container">
            {data.map((char, i) => {
                return (
                    <Character char={char} key={i}/>
                )
            })}
        </div>
    )
}

export default CardsPage