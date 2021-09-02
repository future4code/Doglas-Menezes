import styled from "styled-components";
import {useHistory} from "react-router-dom"
import { useState } from "react";
import axios from "axios"
import { baseUrl } from "../requisitions/Informations";

const AcessoAdm = styled.div`
border: solid 1px black;
width: 400px;
height: 800px;
margin: 30px;
display: flex;
flex-direction: column;
`


export default function LoginPage (props){ 
const[email,setEmail]=useState("")
const[password,setPassword]= useState("")
const history = useHistory()


 const onChangeEmail = (e) =>{
   setEmail(e.target.value)
 }
 const onChangePassword = (e) =>{
  setPassword(e.target.value)
 }
 const onSubmitLogin = (e)=>{
   e.preventDefault()
   console.log(email,password)
   const body = {
     email:email,
     password: password
   }
   axios.post(`${baseUrl}/login`,body)
   .then((res)=>{
      console.log(res.data)
      localStorage.setItem('Token',res.data.token)
      history.push("/AdmHomePage/:id")
   })
   .catch((err)=>{
     console.log(err)
   })
 }
 

  const previousPage = () =>{
    history.goBack()
  }

  
  return(
<AcessoAdm>
  <h3>Acesso Adminstrativo</h3>
  <form onSubmit={onSubmitLogin}>
  <input placeholder="Email"
  type="email"
  value={email}
  onChange={onChangeEmail}
  ></input>

  <input placeholder="Senha"
  type="password"
  value={password}
  onChange={onChangePassword}
  ></input>

  <button>Login</button>
  </form>

  <button onClick={previousPage}>Voltar</button>


</AcessoAdm>

);
}