import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const klik = () => {
        setCounter(counter + 1);
    };

    const klik2 = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={klik}>dodaj</button>
            <button onClick={klik2}>odejmij</button>
        </div>
    );
};

export default Counter;