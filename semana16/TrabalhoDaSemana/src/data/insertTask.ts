import { connection } from "..";

export default async function insertTask(
  id: string,
  title: string,
  descripton: string,
  deadline: string,
  authorId: string
){
  await connection('to_do_List_tasks')
  .insert({id, title, descripton, deadline,author_id: authorId})
}