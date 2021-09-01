import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Accountsservice } from '../accounts.service';
// import { Loggingservice } from '../logging.service';
import { account } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[Loggingservice]
})
export class AccountComponent implements OnInit {
@Input()
  frommainaccount!: account;
  @Input()
  id!: number; 

// @Output() statuschanged = new EventEmitter<{id:number;status:string}>()
 
  // constructor(private loggingservice : Loggingservice,private accountservice : Accountsservice) { }
  constructor(private accountservice : Accountsservice) { }
  ngOnInit(): void {
  }
  // active(){
  //   this.frommainaccount.status = 'active'
  // }
  // inactive(){
  //   this.frommainaccount.status = 'inactive'
  // }
  // unknown(){
  //   this.frommainaccount.status = 'unknown'
  // }

  // onset(status : string ){
  //   this.statuschanged.emit({id:this.id,status:status})
  //   this.loggingservice.loggingservice(status)
     
  // }

  onset(status : string ){
    this.accountservice.onchangedvalue({
      id:this.id,status:status
    })
    this.accountservice.statuschanged.emit(status)
    // this.loggingservice.loggingservice(status)
     
  }
  

}
