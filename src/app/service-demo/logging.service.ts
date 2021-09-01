import { Injectable } from "@angular/core";

@Injectable()
export class Loggingservice{
     loggingservice(status:string){
         console.log("Server status changed to "+status)
        //  alert("new status "+status)
     }
}