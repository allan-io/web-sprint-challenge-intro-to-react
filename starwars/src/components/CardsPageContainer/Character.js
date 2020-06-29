import React from "react"
import ImageSection from "./ImageSection"
import InfoSection from "./InfoSection"
import LikeButton from "./LikeButton"

const Character = ({ char }) => {
    return (
        <div className="characters">
            <ImageSection char={char}/>
            <InfoSection char={char}/>
            <LikeButton className="like-btn" char={char}/>
        </div>
    )
}

export default Character