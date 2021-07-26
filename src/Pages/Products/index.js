import React from "react";
import * as S from './styled.js';
import NavBar from '../../components/Navbar/index.js';
import MainProduct from '../../components/MainProduct/index.js'

function Products() {
  return (
    <>
      <S.Container>
        <NavBar />
        <MainProduct />
      </S.Container>
    </>
  );
}

export default Products;
