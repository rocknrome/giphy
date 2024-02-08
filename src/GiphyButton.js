import React from "react";

function GiphyButton({ fetchRandomGif }) {
    return (
        <button onClick={fetchRandomGif}>Get Random GIF</button>
    );
}

export default GiphyButton;