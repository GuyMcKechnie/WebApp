import React, { useState } from 'react';
function CountingComponent() {
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        setCount(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
    }
    const handleReset = () => {
        setCount(0)
    }
    return (
        <div>
            <h3>Counter</h3>
            <p>{count}</p>
            <button onClick={handleIncrease}>Increase Amount</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease Amount</button>
        </div>
    )
}

export default CountingComponent