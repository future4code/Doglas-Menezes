export type authenticationData={
  id:string
}
export const userTableName="cookenu_users"
export const recipeTableName="cookenu_recipes"

export enum USER_ROLES{
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export type user={
  id: string,
  name: string,
  email: string,
  password: string,
}

export type recipe={
  id: string,
  title: string,
  description: string,
  createAt: string,
  author_id: string
}