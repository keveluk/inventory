import React, { useState } from "react";
import * as S from "./styled.js";




export default function Navbar() {

  return (
    <>
      <S.Nav >
          <S.Anchor href="/">Clientes</S.Anchor>
          <S.Anchor href="/">Produtos</S.Anchor>
      </S.Nav>
    </>
  );
}
