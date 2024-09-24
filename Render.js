import { useState } from "react";

const Render = () => {
  const [x] = useState (false);

  const [name, setName] = useState("Matheus");

  return (
    <div>
        <h1>Isso será extraído</h1>
        { x &&  <p>o valor x é verdadeiro! </p> }
        { !x &&  <p>o valor x é falso!</p> }

      <h1>Fim dá exibição</h1>
      { name === "João " (
        <div>
          <p>o nome é João</p>
        </div>

      )  (
        <div>
            <p>nome ñ encontrado</p>
        </div>

      ) }
        <button onClick={() => setName("joão") }>clique aqui</button>
    </div>

  );
};


export default Render;