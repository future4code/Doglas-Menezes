import React from "react"
import styled from "styled-components"


const Card=styled.div` 
border: solid pink 2px;
display: flex;
align-items: center;
display : block;
text-align: center;
flex-direction: column;
width: 480px;
height: 520px;

`
const ImagemPerfil=styled.div`
height: 250px;
border: solid white 3px;
max-height: 250px;
max-width:100%;
`
const Base=styled.div`
max-width: 100%;
height: 30;
`

const Botoes=styled.button`
border-radius: 50% ;
background-color:red;
padding: 10px;
margin: 10px;
cursor: pointer;
`
const SeguraBotao=styled.div`
justify-content: space-evenly;
display: flex;
`
const Imagem=styled.img`
width: 100%;
height: 100%;
`
const Info=styled.div`
max-width: 100%;
height: 100px;

display:flex;
`



export default function CardMatch({choosePerson,Perfil,getProfileToChoose}){
  
  
  


  return(
    <Card> 
      
      <h1>AstroMatch</h1>

      <ImagemPerfil>
        <Imagem
        src={Perfil.photo} alt="imagem de perfil"
        />
      </ImagemPerfil>
       <Base>
       <Info>
        <ul>Nome:{Perfil.name}</ul>
        <ul>idade:{Perfil.age}</ul>
        <ul>Bio:{Perfil.bio}</ul>
       </Info>
      <SeguraBotao>
      <Botoes><button onClick={choosePerson,getProfileToChoose}>Like</button></Botoes>
      <Botoes><button onClick={getProfileToChoose}>not</button></Botoes>
      </SeguraBotao>
      </Base>
    </Card>
  )

}