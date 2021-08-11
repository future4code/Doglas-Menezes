import React from "react"
import styled from "styled-components"

const Card=styled.div` 
border: solid black 2px;
`

export default function CardMatch(){
  
  return(
    <Card> 
      <div><h1>astroMatch</h1></div>

        <div><button onClick={props.mudarParaCardLista()}>bonequinhos</button></div>
      

    </Card>
  )

}