// import React, { useState } from "react";


// export default function ClientForm(props) {
//   const [fields, setFields] = useState({
//      nome:"Carlos",
//       endereco:"Rua tal"

//   });

//   // function handlePesquisa() {
//   //   axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => console.log(res.data))
    
//   // }

//   function save(){
//     setFields({
//       nome:"",
//       endereco:""
//     })
//   }

//   return (
//     <>
//       <input className="input" placeholder="Nome" value={fields.nome} onChange={e => setFields({nome:e.target.value})} placeholder="Nome" />
//       <input className="input" placeholder="Addr" value={fields.addr} onChange={e => setFields({addr:e.target.value})} placeholder="Endereço" />
//       <button type="button" onClick={save}>Salvar</button>
//     </>
//   );
// }
