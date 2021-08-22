import {Switch,Route,BrowserRouter} from 'react-router-dom'

import AdmHomePage from '../pages/AdmHomePage'
import AplicationFromPage from '../pages/AplicationFromPage';
import Home from '../pages/Home';
import ListTripPage from '../pages/ListTripPage';
import LoginPage from '../pages/LoginPage';
import CreateTripPage from '../pages/CreateTripPage';
import TripeDetailsPage from '../pages/TripeDetailsPage';


 const Rotas= () =>{
   return(
    <BrowserRouter>
     <Switch>
       <Route exact path="/">
        <Home/>
       </Route>

       <Route exact path="/LoginPage">
        <LoginPage/>
       </Route>
      
      <Route exact path="/ListTripPage">
        <ListTripPage/>
      </Route>

      <Route exact path="/AplicationFromPage">
        <AplicationFromPage/>
      </Route>

      <Route exact path="/AdmHomePage/:id">
        <AdmHomePage/>
      </Route>
      <Route exact path="/CreateTripPage">
        <CreateTripPage/>
      </Route>

      <Route exact path="/TripDetailsPage/:id">
        <TripeDetailsPage/>
      </Route>

      <Route>
        <p>Pagina não encontrada ;(</p>
      </Route>

     </Switch>
    </BrowserRouter>
   )
}
export default Rotas;