import styled from "styled-components"
import {useHistory} from "react-router-dom"


const MainContainer = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  height: 800px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`

export default function Home (props){ 
  const history= useHistory()

  const goToListTripPage=()=>{
    history.push("/ListTripPage")
  }
  const goToLoginPage=()=>{
    history.push("/LoginPage")
  }
  
  return(
<MainContainer>
  <h3>ola seja Bem-vindo</h3>
  <button onClick={goToListTripPage}>Viagens</button>
  <button onClick={goToLoginPage}>Login</button>
</MainContainer>


);
}