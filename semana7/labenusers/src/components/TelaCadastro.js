import React from "react"
import axios from 'axios'


export default class TelaCadastro extends React.Component{
  state={
    nome:'',
    email:''
  }

  addNome = (event) =>{
    this.setState({nome:event.target.value})
  }
  addEmail = (event) =>{
    this.setState({email:event.target.value})
  }
  
  cadastroConcluido = () =>{
    const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    
    
    const body={
        name: this.state.nome,
        email: this.state.email
      }
    
    
    const headers= {
        headers:{
        Authorization: "doglas-viegas-lovelace"
        }}
    
        axios
      .post(url,body,headers)
      .then((res)=>{
        alert("usuario Cadastrado com sucesso")
        this.setState({nome:"",email:""})
      })
      .catch((err)=>{ 
        alert(err.response.data.message)
      })
  }
  
  render(){
    return(
      <div>
        <button onClick={this.props.irParaTelaUsuario}>Ir para tela de usuários</button>
        <h2>Cadastro</h2>
         <input placeholder='Digite seu nome'
         value={this.state.nome}
         onChange={this.addNome}
         />
        <input placeholder='Digete seu E-mail'
        value={this.state.email}
        onChange={this.addEmail}
        />
        <button onClick={this.cadastroConcluido}>Cadastro</button>
      
      
       </div>
    )
  }
}