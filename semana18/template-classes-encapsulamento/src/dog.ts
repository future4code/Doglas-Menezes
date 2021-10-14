export type dog = {
   name: string
   weight: number
   bark(): void
   eat(quantity: number): void
   fly(time:number):void
}

export class Dog{
   name: string  
   weight:number 

   bark():void{
      console.log("AU AU")
   }
   eat(quantity:number){
      this.weight+=quantity
   }
   constructor(    instanceName:string,
      instanceWight:number){this.name=instanceName
         this.weight=instanceWight
  
   }
}

export const pluto:Dog = new Dog ("PLUTO",15)

pluto.eat(2)