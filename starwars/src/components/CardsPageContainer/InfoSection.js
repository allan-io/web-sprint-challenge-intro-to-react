import React from "react"

const InfoSection = ({ char }) => {
    return (
        <div className="info-section">
            <p>name: {char.name}</p>
            <p>species: {char.species}</p>
            <p>status: {char.status}</p>
            <p>location: {char.location.name}</p>
        </div>
    )
}

export default InfoSection