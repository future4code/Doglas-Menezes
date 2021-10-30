import connection from "../../connection";
import Base from "../../connection";
import { toUserModel, User } from "../../entities/userEntitites";
import { userTableName } from "../../model/tables";

type findByEmailResponse={
  id: string
  name: string
  email: string
  password: string
}[]

export default class UserData extends Base {
async insert(user: User) {
    try{
       await Base.connection(userTableName)
       .insert(user)
    }catch (error){
     throw new Error("Error users Created")
    }
  }
findUserByEmail=async(email: string)=>{
  try{
    const queryResult:findByEmailResponse = await Base.connection(userTableName).select().where({email})
     
    return queryResult [0]
  }catch (error:any){
    throw new Error(error.sqlMessage || error.message)
  }
}

async checkEmail(email: string): Promise<User>{
  try{
    const queryResult: any = await Base.connection(userTableName)
    .select("*").where({email})

    const user = toUserModel(queryResult[0])
    return user

  }catch (error:any){
    throw new Error(error.sqlMessage || error.message)
  }
}
}