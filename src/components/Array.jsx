import React, { useState } from "react";
import "./style.css";

const Array = () => {
    const [tablica, setTablica] = useState([]);
    const namearray = ["Jan", "Anna", "Zosia", "Piotr", "Kuba", "Kasia"];
    const handleclick = () => {
        let random = Math.floor(Math.random() * namearray.length);
        setTablica([...tablica, namearray[random]]);
    }

    return (  
        <div>
            <div>
                <button onClick={handleclick} className="btn">Dodaj</button>
            </div>
            <div >
            Imiona: 
            <div className="row">
            {tablica.map((item, index) => (
                    <div className="item" key={index}>{item}</div>
                ))}
            </div>
                
            </div>
           
            

        </div> 
    );
}
export default Array;
