import React, { useState } from 'react';
function ColourPicker() {
    const [colour, setColour] = useState("FFFFFF");
    const handleColourChange = (e) => {
        setColour(e.target.value);
    }
    return (
        <div>
            <div style={{ backgroundColor: colour }} className='ColourPickerContainer'>
                <p>Selected Colour: {colour}</p>
            </div>
            <label>Select a Colour:</label>
            <br />
            <input type="color" value={colour} onChange={handleColourChange} />
        </div >
    )
}

export default ColourPicker