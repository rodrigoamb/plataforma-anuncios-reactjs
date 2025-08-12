import { useState } from "react";

export default function Estado() {
  const [meuNome, setMeuNome] = useState("Rodrigo Medeiros");

  function trocarNome() {
    console.log("Disparou a função");

    setMeuNome("Tiago Lima");
  }

  return (
    <div>
      <h1>Usando useState</h1>

      <p>{meuNome}</p>
      <button className="bg-green-300" onClick={trocarNome}>
        Clique aqui
      </button>
    </div>
  );
}
