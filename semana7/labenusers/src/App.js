import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaListaUsuario from "./components/TelaListaUsuario"




//Código

export default class App extends React.Component {
  state={
    telaUm:"cadastro",
    }
    
    trocaTela = () =>{
switch (this.state.telaUm) {
  case "cadastro":
    return <TelaCadastro irParaTelaUsuario={this.irParaTelaUsuario}/>
  case "lista":
    return <TelaListaUsuario irParaTelaCadastro={this.irParaTelaCadastro} />
  default:
    <div>Pagina não encontrada</div>
}
  }
  
irParaTelaCadastro = () =>{
  this.setState({telaUm:"cadastro"})
}

irParaTelaUsuario = () =>{
  this.setState({telaUm:"lista"})
}


  render(){
  return(
     <div>
    
  
    {this.trocaTela()}
    </div>
     );
};

}