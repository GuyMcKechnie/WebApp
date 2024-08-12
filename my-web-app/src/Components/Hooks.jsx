import React, { useState } from 'react';

function Hooks() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const handleNameChange = () => {
        setName(prompt("Enter Name"));
    }
    const handleAgeChange = () => {
        setAge(parseInt(prompt("Enter Age")));
    }
    const clear = () => {
        setName("");
        setAge();
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Can Drive: {age > 18 ? "Yes" : "No"}</h3>
            <button onClick={handleNameChange}>Change Name</button> <button onClick={handleAgeChange}>Change Age</button> <button onClick={clear}>Clear</button>
        </div>
    )
}

export default Hooks;