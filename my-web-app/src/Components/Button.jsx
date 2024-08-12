function Button() {
    const handleClick = (e) => {
        e.target.textContent = "Clicked"
    };
    return (
        <button onDoubleClick={(e) => handleClick(e)} className="Button">Click Me</button>
    )
}

export default Button