import React from "react";
import * as S from './styled.js';
import ProductForm from '../ProductForm/index.js';


function MainProduct() {
  return (
    <>
      <S.Main>
          <S.Header>
              <ProductForm />
          </S.Header>
        <S.Section> 
            
        </S.Section>
      </S.Main>
    </>
  );
}

export default MainProduct;
