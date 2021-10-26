import app from "./app"
import createRecipe from "./endpoints/recipes/createRecipe"
import getRecipeById from "./endpoints/recipes/getRecipeById"
import getProfile from "./endpoints/users/getProfile"
import getUserById from "./endpoints/users/getUserById"
import login from "./endpoints/users/login"
import signup from "./endpoints/users/signup"


app.post("/user/signup", signup)
app.post("/user/login", login)
app.get("/user/profile",getProfile)
app.get("/user/:id/profile",getUserById)

app.post("/recipe",createRecipe)
app.get("/recipe/:id",getRecipeById)

