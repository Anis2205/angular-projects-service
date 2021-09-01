import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { account } from '../account/account.model';
import { Accountsservice } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

})
export class NewAccountComponent implements OnInit {
  accountstatus = ''
  @ViewChild('accountname') nameofaccount! : ElementRef
  // @Output('addingfromnewacoount') addingtoaccount = new EventEmitter<account>();
  constructor(private accountservice : Accountsservice) {
    this.accountservice.statuschanged.subscribe(
      (status:string) => alert("New status : "+status)
    )
  }

  onaddaccount(){
    //  this.addingtoaccount.emit({
    //   name:this.nameofaccount.nativeElement.value,
    //   status:this.accountstatus
    //  });
    this.accountservice.onaddtoaccounts(
      {
        name:this.nameofaccount.nativeElement.value,
        status:this.accountstatus
       }
    )
  }

  ngOnInit(): void {
  }

}
