import app from "./app"
import {signup} from "./endpoints/signup"

app.post('/users/signup', signup)