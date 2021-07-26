import React,{useState} from "react";
import * as S from './styled.js';
import ClientForm from '../ClientForm/index.js';


function MainClient() {
const [client, setClient] = useState({
     id:0,
    nome:"",
    endereco:"",
    cep:"",
    cidade:"",
    estado:""
  })

  const [cadastros, setCadastros] = useState([])

  function attCadastro(){
    let clientes = localStorage.getItem('clientes');
    if(clientes != null){
      let listaClientes = JSON.parse(clientes);
      setCadastros(listaClientes)
    }
  // }
  }


  function salvar(){

    let clientes = localStorage.getItem('clientes');
    if(clientes === null){
      localStorage.setItem('clientes', JSON.stringify([client]));  
      setClient({
      id:client.id+1,
      nome:"",
      endereco:"",
      cep:"",
      cidade:"",
      estado:""
    })
    }else{
      let listaClientes = JSON.parse(clientes);
      listaClientes.push(client)
      // localStorage.removeItem('clientes');  
      localStorage.setItem('clientes', JSON.stringify(listaClientes));  
      setClient({
      id:client.id+1,
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
      console.log(e.target.value)
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

export default MainClient;
