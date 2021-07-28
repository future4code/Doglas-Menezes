import React from "react"
import axios from "axios"
import styled from 'styled-components'


const CardDeUsuario= styled.div` 
border: solid;
border-color: black;
margin: 8px;
padding: 8px;
display:flex;
justify-content: space-between;
cursor: pointer;
`


export default  class TelaListaUsuario extends React.Component {
 state={
   lista:[],
 }
 
 
   componentDidMount(){
     this.pegarUsuario()
    }



  pegarUsuario= () =>{
    const url='https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    
    const headers= {
      headers:{
      Authorization: "doglas-viegas-lovelace"
      }}
      axios
      .get(url,headers)
      .then((res) => {
          this.setState({lista:res.data})
      })
      .catch((err) => {
          alert('Tenta novamente')
      })
  }
  deletarUsuario =(id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    const headers= {
      headers:{
      Authorization: "doglas-viegas-lovelace"
      }}
    axios.delete(url,headers)
  .then((res) =>{
       alert('Usuário deletado')
       this.pegarUsuario()
  })
  .catch((err)=>{
      alert('Usuário não deletado')
})

  }
  
  render(){
     const listaUsuario= this.state.lista.map((user) => {
       return <CardDeUsuario key={user.id} >{user.name}
      <buton onClick={()=> this.deletarUsuario(user.id)}>X</buton>  
      </CardDeUsuario>
 })

    return(
      <div>
        <button onClick={this.props.irParaTelaCadastro}>Ir para tela de Cadastro</button>

        <h2>Lista de usuários</h2>
         {listaUsuario}
      </div>
    )
  }

};