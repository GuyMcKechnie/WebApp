import React, { useState } from 'react';
function TextUpdater() {
    const [text, setText] = useState("Enter Text");
    const updateText = (e) => {
        setText(e.target.value);
    };
    return (
        <div>
            <input type="text" onChange={(e) => updateText(e)} />
            <p>Text: {text}</p>
        </div>
    )
}

export default TextUpdater;