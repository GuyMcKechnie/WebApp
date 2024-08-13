import React, { useState } from 'react';
function TextUpdater() {
    const [text, setText] = useState("Enter Text");
    const updateText = (e) => {
        setText(e.target.value);
    };
    const [quantity, setQuantity] = useState(1);
    const updateQuantity = (e) => {
        setQuantity(e.target.value);
    };
    const [deliveryInstructions, setDeliveryInstructions] = useState("");
    const updateDeliveryInstructions = (e) => {
        setDeliveryInstructions(e.target.value);
    };
    const [paymentType, setPaymentType] = useState("");
    const updatePayment = (e) => {
        setPaymentType(e.target.value);
    };
    const [shipping, setShipping] = useState("Delivery");
    const updateShipping = (e) => {
        setShipping(e.target.value);
    };
    return (
        <div>
            <input type="text" onChange={(e) => updateText(e)} />
            <p>Text: {text}</p>

            <input type="number" onChange={(e) => updateQuantity(e)} value={quantity} />
            <p>Quantity: {quantity}</p>

            <textarea placeholder='Enter delivery instructions' onChange={(e) => updateDeliveryInstructions(e)} value={deliveryInstructions}></textarea>
            <p>Delivery Instructions: {deliveryInstructions}</p>

            <select value={paymentType} onChange={(e) => updatePayment(e)}>
                <option value="Select an Option">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="American Express">American Express</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment Type: {paymentType}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={(e) => updateShipping(e)} />
                Pick Up
            </label> <br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={(e) => updateShipping(e)} />
                Delivery
            </label>
            <p>Delivery: {shipping}</p>
        </div>
    )
}

export default TextUpdater;