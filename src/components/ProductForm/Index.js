import React, { useState } from "react";
import * as S from './styled.js';

export default function ProductForm() {

  return (
    <>
    <S.H1>Produtos</S.H1>
    <S.Left>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Produto" name="produto" id='produto' required />
      <S.Label for="produto" class="form__label">Produto</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Altura" name="altura" id='altura' required />
      <S.Label for="altura" class="form__label">Altura (cm)</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Largura" name="largura" id='largura' required />
      <S.Label for="largura" class="form__label">Largura (cm)</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Comprimento" name="comprimento" id='comprimento' required />
      <S.Label for="comprimento" class="form__label">Comprimento (cm)</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" class="form__field" placeholder="Peso" name="peso" id='peso' required />
      <S.Label for="peso" class="form__label">Peso (gramas)</S.Label>
    </S.FormGroup>
    </S.Left>
      <S.Right>
        <S.Btn>Salvar</S.Btn>
        <S.Btn>Listar</S.Btn>
      </S.Right>
    </>
  );
}
