import React, {useState} from "react";  

const Simple = () => {
    const [imie, setImie] = useState("Jan");
    const klik = () => {
        //imie = "Anna";
        if(imie === "Anna") {
            setImie("Jan");
        }
        else
        setImie("Anna");
        console.log(imie);
    }

    return (
        <div>
            <h1>Witaj {imie}</h1>
            <button onClick={klik}> Zmien</button>
        </div>
    );
}

export default Simple;
