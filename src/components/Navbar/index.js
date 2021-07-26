import React, { useState } from "react";
import * as S from "./styled.js";




export default function Navbar() {

  return (
    <>
      <S.Nav >
          <S.Anchor to="/">Clientes</S.Anchor>
          <S.Anchor to="/produtos">Produtos</S.Anchor>
      </S.Nav>
    </>
  );
}
