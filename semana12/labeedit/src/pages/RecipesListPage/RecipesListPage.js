import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {RecipeListContainer,AddRecipeButton} from './Styled';
import {BASE_URL} from '../../constants/urls';
import useRequestData from "../../hooks/useRequestData";
import { useHistory } from "react-router";
import { goToAddRecipes, goToRecipesDetail } from "../../routes/coordinator";
import {Add} from '@material-ui/icons'


const RecipesListPage=()=>{
  useProtectedPage()
  const history =useHistory()
  const recipes=useRequestData([],`${BASE_URL}/recipe/feed`)

  const onClickDetails=(id)=>{
   goToRecipesDetail(history,id)
  }

  const recipeCards= recipes.map((recipe)=>{
    return <RecipeCard
    key={recipe.id}
    title={recipe.title}
    image={recipe.image}
    onClick={()=> onClickDetails(recipe.recipe_id)}
    />
  })
  return(

    <RecipeListContainer>
     {recipeCards}
     <AddRecipeButton
     color={"primary"}
     onClick={()=>goToAddRecipes(history)}
     > 
     <Add/> 
     </AddRecipeButton>
    </RecipeListContainer>
  )
}
export default RecipesListPage;