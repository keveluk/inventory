import React, { useState } from "react";
import axios from 'axios';
import * as S from './styled.js';


function Home(props) {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => console.log(res.data))
    
  }

  return (
    <>
      <S.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
      <h1>{usuario}</h1>
    </>
  );
}

export default Home;
