import styled from "styled-components";

const AcessoAdm = styled.div`
border: solid 1px black;
width: 400px;
height: 800px;
margin: 30px;
display: flex;
flex-direction: column;
`


export default function LoginPage (){ 
  
  return(
<AcessoAdm>
  <h3>Acesso Adminstrativo</h3>
  <input placeholder="Email"></input>
  <input placeholder="Senha"></input>
  <button>Login</button>
  <button>Voltar</button>


</AcessoAdm>

);
}