import { Component, OnInit } from '@angular/core';
import { account } from './account/account.model';
import { Accountsservice } from './accounts.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css'],
  // providers:[Accountsservice]
})
export class ServiceDemoComponent implements OnInit {
  accounts: account[]= [];
  constructor(private accountservice : Accountsservice) { }

  ngOnInit() {
    this.accounts=this.accountservice.accounts
    // console.log(this.accounts)
  }

  // onaddtoaccounts(value : account){
  //   this.accounts.push(value)
  // }
  // onchangedvalue(newvalue : any){
  //   this.accounts[newvalue.id].status = newvalue.status;
  // }

}
