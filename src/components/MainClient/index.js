import React,{useEffect, useState} from "react";
import * as S from './styled.js';
import ClientForm from '../ClientForm/index.js';
import hash from 'object-hash';

function MainClient() {
const [client, setClient] = useState({
  id:"",
    nome:"",
    endereco:"",
    cep:"",
    cidade:"",
    estado:""
  })

  const [cadastros, setCadastros] = useState([])

  useEffect(()=>{
    attCadastro();
  },[])


  function attCadastro(){
    let clientes = localStorage.getItem('clientes');
    if(clientes != null){
      let listaClientes = JSON.parse(clientes);
      setCadastros(listaClientes)
    }
  }


  function salvar(){
    client.id = hash(client);
    let clientes = localStorage.getItem('clientes');
    if(clientes === null){
      localStorage.setItem('clientes', JSON.stringify([client]));  
      setClient({
      id:"",
      nome:"",
      endereco:"",
      cep:"",
      cidade:"",
      estado:""
    })
    }else{
      let listaClientes = JSON.parse(clientes);
      listaClientes.push(client) 
      localStorage.setItem('clientes', JSON.stringify(listaClientes));  
      setClient({
      id:"",
      nome:"",
      endereco:"",
      cep:"",
      cidade:"",
      estado:""
    })
    }
    attCadastro()
  }

  function handleChange(e){
    if(e.target.getAttribute('name')==='nome'){
      setClient({id:client.id,
        nome:e.target.value,
                endereco:client.endereco,
                cep:client.cep,
                cidade:client.cidade,
                estado:client.estado
  })
    }else if(e.target.getAttribute('name')==='endereco'){
      
setClient({id:client.id,
  nome:client.nome,
                endereco:e.target.value,
                cep:client.cep,
                cidade:client.cidade,
                estado:client.estado
  })
    }else if(e.target.getAttribute('name')==='cep'){
      
      setClient({id:client.id,
        nome:client.nome,
                endereco:client.endereco,
                cep:e.target.value ,
                cidade:client.cidade,
                estado:client.estado
  })
    }else if(e.target.getAttribute('name')==='cidade'){
      setClient({id:client.id,
        nome:client.nome,
                endereco:client.endereco,
                cep:client.cep,
                cidade: e.target.value,
                estado:client.estado
  })
    }else if(e.target.getAttribute('name')==='estado'){
      setClient({id:client.id,
        nome:client.nome,
                endereco:client.endereco,
                cep:client.cep ,
                cidade:client.cidade,
                estado:e.target.value
  })
    }
  }

    function deletar(e){
      let clientes = localStorage.getItem('clientes');
      let listaClientes = JSON.parse(clientes);
      for (var i = 0; i < listaClientes.length; i++) {
        if(listaClientes[i].id===e.target.id){
          listaClientes.splice(i,1)
          localStorage.setItem('clientes', JSON.stringify(listaClientes))
          attCadastro()
          return
        }
      }
    }

  return (
    <>
      <S.Main>
          <S.Header>
              <ClientForm salvar={salvar} handle={handleChange} client={client} atualizar={attCadastro}/>
          </S.Header>
        <S.Section> {
            cadastros.map(cadastro=>{
              return(
                <S.Item>
                  <S.ItemChild>
                  {cadastro.nome}
                  </S.ItemChild>
                  <S.ItemChild>
                  {cadastro.endereco}
                  </S.ItemChild>
                  <S.ItemChild>
                  {cadastro.cep}
                  </S.ItemChild>
                  <S.ItemChild>
                  {cadastro.cidade}
                  </S.ItemChild>
                  <S.ItemChild>
                  {cadastro.estado}
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

export default MainClient;
