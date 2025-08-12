import { useState } from "react";

export default function Estado2() {
  const [minhaTela, setMinhaTela] = useState(true);

  function trocarTela(tela) {
    console.log("disparou a funcao");

    if (tela === "tela01") {
      setMinhaTela(true);
    }

    if (tela === "tela02") {
      setMinhaTela(false);
    }
  }

  return (
    <div>
      <button onClick={() => trocarTela("tela01")}>Tela 01</button>
      <button onClick={() => trocarTela("tela02")}>Tela 02</button>

      {minhaTela ? (
        <div>
          <h1>MINHA PRIMEIRA TELA</h1>
        </div>
      ) : (
        <div>
          <h1>MINHA SEGUNDA TELA</h1>
        </div>
      )}
    </div>
  );
}
