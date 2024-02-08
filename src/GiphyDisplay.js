import React from "react";

function GiphyDisplay({ gifUrl }) {
    return  (
        <div>
            <img src={gifUrl} alt="Random Gif" />
        </div>
    );

}

export default GiphyDisplay