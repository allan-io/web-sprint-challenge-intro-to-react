import React from "react"
import ImageSection from "./ImageSection"
import InfoSection from "./InfoSection"
import LikeButton from "./LikeButton"

const Character = () => {
    return (
        <div className="characters">
            <ImageSection/>
            <InfoSection/>
            <LikeButton/>
        </div>
    )
}

export default Character