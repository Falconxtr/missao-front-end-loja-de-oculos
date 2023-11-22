import React from 'react';
import "./App.css";

import Topo from './componenters/Topo/topo.js';
import Conteudo from './componenters/Conteudo/conteudo.js';
import Rodape from "./componenters/Rodape/rodape.js"

function App() {
  return (
    <section>
      <Topo />
      <Conteudo />
      <Rodape />
    </section>
  );
}

export default App;
