import { Injectable } from "@angular/core"
import { Counter } from "./counter.service"

@Injectable()

export class Userservice{
   tochange : string = ""
   activeusers : string [] = [
   "Test 1",
   "Test 2"
   ]
   inactiveusers : string[] = [
    "Test 3",
    "Test 4"
   ]
   constructor(private counterservice :Counter){

   }

   changetoinactive(id:number){
       this.tochange = (this.activeusers.splice(id,1)).toString()
       this.inactiveusers.push(this.tochange)
       this.counterservice.aiusercount();
   }
   
   changetoactive(id:number){
    this.tochange = (this.inactiveusers.splice(id,1)).toString()
    this.activeusers.push(this.tochange)
    this.counterservice.iausercount();
}

}