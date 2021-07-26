import React from "react";
import * as S from './styled.js';
import NavBar from '../../components/Navbar/index.js';
import MainClient from '../../components/MainClient/index.js';


function Clients() {
  return (
    <>
      <S.Container>
        <NavBar />
        <MainClient />
      </S.Container>
    </>
  );
}

export default Clients;
