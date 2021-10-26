import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import createUser from "./enpoints/createUsers";
import getUserByid from "./enpoints/getUserByid";
import editUser from "./enpoints/editUser";
import createTask from "./enpoints/createTask";
import getTaskById from "./enpoints/getTask.ById";


dotenv.config()
const app =express()
app.use(express.json())
export const connection= knex({
client:'mysql',
connection:{
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  port:3306
}
});

app.put('/user',createUser)
app.get('/user/:id',getUserByid)
app.post('/user/edit/:id',editUser)

app.put('/task',createTask)
app.get('/task/:id',getTaskById)


app.listen(3003,()=>{
  console.log('Servidor rodando na porta 3003')
});