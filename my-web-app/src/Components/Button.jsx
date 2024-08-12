function Button() {
    let count = 0;
    const handleClick = (name) => {
        count++;
        console.log(`Clicked ${name} ${count} times.`);
    };
    return (
        <button onClick={() => handleClick("User")} className="Button">Click Me</button>
    )
}

export default Button