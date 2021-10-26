import { connection } from "..";

export default async function selectUserById(
  id: string
){
  const result= await connection('to_do_List_users')
  .select('*')
  .where({id})
  
  return result[0]
}