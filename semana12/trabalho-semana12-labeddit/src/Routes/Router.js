import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import LoginPage from '../Pages/LoginPage/LoginPage'
import SingUp from '../Pages/SingUpPage/SingUp'
import FeedPage from '../Pages/FeedPage/FeedPage'
import PostDetails from '../Pages/PostDetails/PostDetails'


const Router =(props)=>{

return(
   <BrowserRouter>
   <Switch>
     <Route exact path='/'>
      <LoginPage/>
     </Route>

     <Route exact path='/Cadastro'>
     <SingUp/>
     </Route>

     <Route exact path='/feed'>
     <FeedPage/>
     </Route>

     <Route exact path='/post/:id'>
     <PostDetails/>
     </Route>

   </Switch>
   </BrowserRouter>
)
}

export default Router