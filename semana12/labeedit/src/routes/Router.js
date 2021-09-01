import React from 'react'
import {Switch,Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage'
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage"
import SingUpPage from '../pages/SingUpPage/SingUpPage'
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const Router=({setRightButtonText})=>{
  return(
    <Switch>
     <Route exact path='/login'>
       <LoginPage  setRightButtonText={setRightButtonText}/>
     </Route>

     <Route exact path='/adicionarReceitas'>
       <AddRecipesPage/>
     </Route>

     <Route exact path='/detalhe/:id'>
       <RecipeDetailsPage/>
     </Route>

     <Route exact path='/cadastro'>
       <SingUpPage setRightButtonText={setRightButtonText}/>
     </Route>

     <Route exact path='/'>
       <RecipesListPage/>
     </Route>
     <Route>
       <ErrorPage/>
     </Route>

    </Switch>

  )

}
export default Router