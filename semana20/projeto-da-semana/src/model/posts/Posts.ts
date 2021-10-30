
enum POST_TYPE{
  NORMAL = "NORMAL",
  EVENT = "EVENT"
}

export default class Posts{
  constructor(
  private id:string,
  private user_id:string,
  private type:POST_TYPE,
  private photo_url:string,
  private timestamp:number
  ){}
  public getId(){
    return this.id
  }

  public getUser_id(){
    return this.user_id
  }

  public getTypes(){
    return this.type
  }

  public getPhoto_url(){
    return this.photo_url
  }

  public getTimestamp(){
    return this.timestamp
  }

}

