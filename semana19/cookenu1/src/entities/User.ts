export interface authenticationData{
  id: string
}

export enum USER_ROLES{
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export class user{
  constructor(
    public id:string,
    public name:string,
    public email:string,
    public password:string,
    public role:USER_ROLES
  ) {}

}

