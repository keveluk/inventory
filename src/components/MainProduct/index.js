import React,{useEffect, useState} from "react";
import * as S from './styled.js';
import ProductForm from '../ProductForm/index.js';
import hash from 'object-hash';

export default function MainProduct() {
const [product, setProduct] = useState({
     id:"",
    produto:"",
    altura:"",
    largura:"",
    comprimento:"",
    peso:""
  })

  const [cadastros, setCadastros] = useState([])

  useEffect(()=>{
    attCadastro();
  },[])

  function attCadastro(){
    let cadastros = localStorage.getItem('produtos');
    if(cadastros != null){
      let listaProdutos = JSON.parse(cadastros);
      setCadastros(listaProdutos)
    }
  }


  function salvar(){
    product.id = hash(product);
    let produtos = localStorage.getItem('produtos');
    if(produtos === null){
      localStorage.setItem('produtos', JSON.stringify([product]));  
      setProduct({
        id:"",
        produto:"",
        altura:"",
        largura:"",
        comprimento:"",
        peso:""
    })
    }else{
      let listaProdutos = JSON.parse(produtos);
      listaProdutos.push(product)
      localStorage.setItem('produtos', JSON.stringify(listaProdutos));  
      setProduct({
        id:"",
        produto:"",
        altura:"",
        largura:"",
        comprimento:"",
        peso:""
    })
    }
    attCadastro()
  }

  function handleChange(e){
    if(e.target.getAttribute('name')==='produto'){
      
      setProduct({id:product.id,
                produto:e.target.value,
                altura:product.altura,
                largura:product.largura,
                comprimento:product.comprimento,
                peso:product.peso
  })
    }else if(e.target.getAttribute('name')==='altura'){
      
setProduct({id:product.id,
                produto:product.produto,
                altura:e.target.value,
                largura:product.largura,
                comprimento:product.comprimento,
                peso:product.peso
  })
    }else if(e.target.getAttribute('name')==='largura'){
      
      setProduct({id:product.id,
                  produto:product.produto,
                altura:product.altura,
                largura:e.target.value ,
                comprimento:product.comprimento,
                peso:product.peso
  })
    }else if(e.target.getAttribute('name')==='comprimento'){
      setProduct({id:product.id,
                produto:product.produto,
                altura:product.altura,
                largura:product.largura,
                comprimento: e.target.value,
                peso:product.peso
  })
    }else if(e.target.getAttribute('name')==='peso'){
      setProduct({id:product.id,
                produto:product.produto,
                altura:product.altura,
                largura:product.largura ,
                comprimento:product.comprimento,
                peso:e.target.value
  })
    }
  }

function deletar(e){
      let produtos = localStorage.getItem('produtos');
      let listaProdutos = JSON.parse(produtos);
      for (var i = 0; i < listaProdutos.length; i++) {
        if(listaProdutos[i].id===e.target.id){
          listaProdutos.splice(i,1)
          localStorage.setItem('produtos', JSON.stringify(listaProdutos))
          attCadastro()
          return
        }
      }
    }
  return (
    <>
      <S.Main>
          <S.Header>
              <ProductForm salvar={salvar} handle={handleChange} product={product} atualizar={attCadastro}/>
          </S.Header>
        <S.Section> {
            cadastros.map(cadastro=>{
              return(
                <S.Item>
                  <S.ItemChild>
                  {cadastro.produto}
                  </S.ItemChild>
                  <S.ItemChild>
                  {cadastro.altura}
                  </S.ItemChild>
                  <S.ItemChild>
                  {cadastro.largura}
                  </S.ItemChild>
                  <S.ItemChild>
                  {cadastro.comprimento}
                  </S.ItemChild>
                  <S.ItemChild>
                  {cadastro.peso}
                  </S.ItemChild>
                  <S.ItemChild onClick={deletar} id={cadastro.id}>
                  <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path  fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
                  </S.ItemChild>
                  </S.Item>
              )
            })}
        </S.Section>
      </S.Main>
    </>
  );
}
