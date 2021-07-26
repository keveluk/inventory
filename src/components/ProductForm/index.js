import React from "react";
import * as S from './styled.js';

export default function ProductForm(props) {

  return (
    <>
    <S.H1>Produtos</S.H1>
    <S.Left>
    <S.FormGroup>
      <S.Input type="input" value={props.product.produto} onChange={e=>props.handle(e)} placeholder="Produto" name="produto" id='produto' required />
      <S.Label htmlFor="produto" >Produto</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" value={props.product.altura} onChange={e=>props.handle(e)} placeholder="Altura" name="altura" id='altura' required />
      <S.Label htmlFor="altura" >Altura (cm)</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" value={props.product.largura} onChange={e=>props.handle(e)} placeholder="Largura" name="largura" id='largura' required />
      <S.Label htmlFor="largura" >Largura (cm)</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" value={props.product.comprimento} onChange={e=>props.handle(e)} placeholder="Comprimento" name="comprimento" id='comprimento' required />
      <S.Label htmlFor="comprimento" >Comprimento (cm)</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" value={props.product.peso} onChange={e=>props.handle(e)} placeholder="Peso" name="peso" id='peso' required />
      <S.Label htmlFor="peso" >Peso (gramas)</S.Label>
    </S.FormGroup>
    </S.Left>
      <S.Right>
        <S.Btn onClick={props.salvar}>Salvar</S.Btn>
        <S.Btn onClick={props.atualizar}>Listar</S.Btn>
      </S.Right>
    </>
  );
}
