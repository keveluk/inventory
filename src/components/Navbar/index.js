import React, { useState } from "react";
import * as S from "./styled.js";




export default function Navbar() {

  return (
    <>
      <S.Nav >
          <S.Anchor>Clientes</S.Anchor>
          <S.Anchor>Produtos</S.Anchor>
      </S.Nav>
    </>
  );
}
