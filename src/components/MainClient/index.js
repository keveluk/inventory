import React from "react";
import * as S from './styled.js';
import ClientForm from '../ClientForm/index.js';


function MainClient() {
  return (
    <>
      <S.Main>
          <S.Header>
              <ClientForm />
          </S.Header>
        <S.Section> 
            
        </S.Section>
      </S.Main>
    </>
  );
}

export default MainClient;
