import React, { useState } from "react";
import "./style.css";

const Questions = () => {
  const [odkrytaFiszka, setOdkrytaFiszka] = useState(null);

  var pytania = [
    { id: 1, pytanie: "Jaka jest stolica Polski?", odpowiedz: "Warszawa" },
    { id: 2, pytanie: "Ile wynosi pierwiastek kwadratowy z 25?", odpowiedz: "5" },
    { id: 11, pytanie: "Jaka jest stolica Francji?", odpowiedz: "Paryż" },
    { id: 12, pytanie: "Ile wynosi suma kątów w trójkącie?", odpowiedz: "180 stopni" },
    { id: 13, pytanie: "Kto był pierwszym prezydentem Stanów Zjednoczonych?", odpowiedz: "George Washington" },
    { id: 4, pytanie: "Ile planet jest w naszym Układzie Słonecznym?", odpowiedz: "8" },
    { id: 5, pytanie: "Kto napisał 'Wojna i pokój'?", odpowiedz: "Lew Tołstoj" },
    { id: 6, pytanie: "Jaki pierwiastek chemiczny ma symbol 'O'?", odpowiedz: "Tlen" },
    { id: 7, pytanie: "W którym roku rozpoczęła się II wojna światowa?", odpowiedz: "1939" },
    { id: 8, pytanie: "Kto wynalazł żarówkę?", odpowiedz: "Thomas Edison" },
    { id: 9, pytanie: "Ile kontynentów jest na Ziemi?", odpowiedz: "7" },
    { id: 10, pytanie: "Kto był autorem 'Romeo i Julia'?", odpowiedz: "William Shakespeare" }
  ];

  const flipFiszka = (id) => {
    setOdkrytaFiszka((prevOdkrytaFiszka) => {
      if (prevOdkrytaFiszka === id) {
        return null; 
      } else {
        return id; 
      }
    });
  };

  return (
    <div>
      <div>
        <div className="row">
          {pytania.map((item) => (
            <div
              className={`item ${odkrytaFiszka === item.id ? "odkryte" : ""} ${odkrytaFiszka === item.id ? "answer" : "question"}`}
              key={item.id}
              onClick={() => flipFiszka(item.id)}
            >
              {odkrytaFiszka === item.id ? item.odpowiedz : item.pytanie}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
