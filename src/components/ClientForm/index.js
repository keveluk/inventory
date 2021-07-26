import React, { useState } from "react";
import * as S from './styled.js';

export default function ClientForm() {

  return (
    <>
    <S.Left>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
      <S.Label for="name" class="form__label">Name</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Endereco" name="endereco" id='endereco' required />
      <S.Label for="endereco" class="form__label">Endereco</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Cep" name="cep" id='cep' required />
      <S.Label for="cep" class="form__label">Cep</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Cidade" name="cidade" id='cidade' required />
      <S.Label for="cidade" class="form__label">Cidade</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Estado" name="estado" id='estado' required />
      <S.Label for="estado" class="form__label">Estado</S.Label>
    </S.FormGroup>
    </S.Left>
      <S.Right>
        <S.Btn>Salvar</S.Btn>
      </S.Right>
    </>
  );
}
