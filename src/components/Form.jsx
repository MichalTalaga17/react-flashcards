import React, {useState} from "react";

const Form = () => {
    const [imie, setImie] = useState("");
    const handleChange = (event) => {
        setImie(event.target.value);
    }
    const reset = () => {
        setImie("");
    }

    return (
        <div>
            <input type="text" onChange={handleChange}/>
            Witaj {imie}
            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default Form;