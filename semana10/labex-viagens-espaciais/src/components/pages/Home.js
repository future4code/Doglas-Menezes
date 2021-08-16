import styled from "styled-components"


const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 800px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`

export default function Home (){ 
  
  return(
<MainContainer>
  <h3>ola seja Bem-vindo</h3>
  <button>Viagens</button>
  <button>Login</button>
</MainContainer>


);
}