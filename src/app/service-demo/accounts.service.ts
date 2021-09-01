import { EventEmitter, Injectable } from "@angular/core";
import { account } from "./account/account.model";
import { Loggingservice } from "./logging.service";
@Injectable()
export class Accountsservice{
     accounts: account[]= [{
         name:"Testd",status:"active"
     }];

     constructor(private loggingservice : Loggingservice){

     }

     statuschanged = new EventEmitter<string>()

     onaddtoaccounts(value : account){
        this.accounts.push(value)
        // console.log(this.accounts)
      }
      onchangedvalue(newvalue : any){
        this.accounts[newvalue.id].status = newvalue.status;
        this.loggingservice.loggingservice(newvalue.status)
      }
     
}