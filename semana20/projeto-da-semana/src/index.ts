import app from "./app"
import UserController from "./controller/user/User.controller";


const userController= new UserController();

app.post("/users/signup",userController.signup)

app.post("/users/login",userController.login)

