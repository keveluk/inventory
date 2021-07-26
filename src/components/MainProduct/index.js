import React,{useState} from "react";
import * as S from './styled.js';
import ProductForm from '../ProductForm/index.js';


function MainProduct() {
const [product, setProduct] = useState({
     id:0,
    produto:"",
    altura:"",
    largura:"",
    comprimento:"",
    peso:""
  })

  const [cadastros, setCadastros] = useState([])

  function attCadastro(){
    // let list = [];
    // for(var i=0, len=localStorage.length; i<len; i++) {
    // var key = localStorage.key(i);
    // var value = localStorage[key];
    let cadastros = localStorage.getItem('produtos');
    if(cadastros != null){
      let listaProdutos = JSON.parse(cadastros);
      setCadastros(listaProdutos)
    }
  // }
  }


  function salvar(){

    let produtos = localStorage.getItem('produtos');
    if(produtos === null){
      localStorage.setItem('produtos', JSON.stringify([product]));  
      setProduct({
        id:product.id+1,
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
        id:product.id+1,
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
    if(e.target.getAttribute('name')=='produto'){
      
      setProduct({id:product.id,
                produto:e.target.value,
                altura:product.altura,
                largura:product.largura,
                comprimento:product.comprimento,
                peso:product.peso
  })
    }else if(e.target.getAttribute('name')=='altura'){
      
setProduct({id:product.id,
                produto:product.produto,
                altura:e.target.value,
                largura:product.largura,
                comprimento:product.comprimento,
                peso:product.peso
  })
    }else if(e.target.getAttribute('name')=='largura'){
      
      setProduct({id:product.id,
                  produto:product.produto,
                altura:product.altura,
                largura:e.target.value ,
                comprimento:product.comprimento,
                peso:product.peso
  })
    }else if(e.target.getAttribute('name')=='comprimento'){
      setProduct({id:product.id,
                produto:product.produto,
                altura:product.altura,
                largura:product.largura,
                comprimento: e.target.value,
                peso:product.peso
  })
    }else if(e.target.getAttribute('name')=='peso'){
      setProduct({id:product.id,
                produto:product.produto,
                altura:product.altura,
                largura:product.largura ,
                comprimento:product.comprimento,
                peso:e.target.value
  })
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
                  <S.ItemChild>
                  Delete
                  </S.ItemChild>
                  </S.Item>
              )
            })}
        </S.Section>
      </S.Main>
    </>
  );
}

export default MainProduct;
