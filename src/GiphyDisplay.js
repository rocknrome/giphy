// GiphyDisplay.js
import React from "react";

function GiphyDisplay({ gifUrl }) {
    return  (
        <div className="giphy-display">
            <img src={gifUrl} alt="Random Gif" className="giphy-image" />
        </div>
    );

}

export default GiphyDisplay;
