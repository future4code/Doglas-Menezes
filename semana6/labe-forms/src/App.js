import React from "react";

import Etapa1 from "./components/Etapa1.js";
import Etapa2 from "./components/Etapa2.js";
import Etapa3 from "./components/Etapa3.js";



export default class App extends React.Component {
 state = {
   etapa:1,
 }

 renderizaEtapa= () => {
 switch(this.state.etapa){
 case 1:
   return <Etapa1/>
 case 2:
   return <Etapa2/>
 case 3:
   return <Etapa3/>
 default: 
 return(
   <h1>O formulario Acabou</h1>,
   <h3>Muito obrigado por participar! Entraremos em contato!</h3>
 )
   ; 
 }
 }

 proximaEtapa = () => {
   this.setState({etapa: this.state.etapa +1})
 }

  render () {
      return (
        <div>
          {this.renderizaEtapa()}
          <button onclick={this.proximaEtapa}>Próxima Etapa</button>
        </div>
      );
    
  }
}
