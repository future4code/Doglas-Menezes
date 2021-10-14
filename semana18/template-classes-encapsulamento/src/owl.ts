export type owl = {
   name: string
   weight: number
   chirp(): void
   eat(quantity: number): void
   fly(time:number):void
}

export class Owl{
   name: string
   weight: number

   chirp():void{
      console.log('Hu Hu')
   }
   eat(quantity: number){
      this.weight=+ quantity
   }
   fly(time:number){
      console.log(`${this.name} Voou`)
      setTimeout(()=>{
       this.weight-=time
       console.log(`${this.name} pousou`)
      },time*1000)
   }

   constructor(name:string,weight:number){
      this.name=name
      this.weight=weight

   }
}

export const hedwing = new Owl("hedwing",8)