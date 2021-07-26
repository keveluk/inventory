import React from "react";
import * as S from './styled.js';

export default function ClientForm(props) {
  

  return (
    <>
    <S.H1>Clientes</S.H1>
    <S.Left>
    <S.FormGroup>
      <S.Input type="input" value={props.client.nome} onChange={e=>props.handle(e)}  placeholder="Nome" name="nome" id='nome' required />
      <S.Label htmlFor="nome">Nome</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" value={props.client.endereco} onChange={e=>props.handle(e)}  placeholder="Endereco" name="endereco" id='endereco' required />
      <S.Label htmlFor="endereco">Endereco</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" value={props.client.cep} onChange={e=>props.handle(e)}  placeholder="Cep" name="cep" id='cep' required />
      <S.Label htmlFor="cep">Cep</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" value={props.client.cidade} onChange={e=>props.handle(e)}  placeholder="Cidade" name="cidade" id='cidade' required />
      <S.Label htmlFor="cidade">Cidade</S.Label>
    </S.FormGroup>
    <S.FormGroup>
      <S.Input type="input" value={props.client.estado} onChange={e=>props.handle(e)}  placeholder="Estado" name="estado" id='estado' required />
      <S.Label htmlFor="estado">Estado</S.Label>
    </S.FormGroup>
    </S.Left>
      <S.Right>
        <S.Btn onClick={props.salvar}>Salvar</S.Btn>
        <S.Btn onClick={props.atualizar}>Listar</S.Btn>
      </S.Right>
    </>
  );
}
