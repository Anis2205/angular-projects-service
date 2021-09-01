import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter.service';
import { Userservice } from '../User.service';

@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.css']
})
export class ActiveusersComponent implements OnInit {
  auser : string[]= []
  // ai = 0
  constructor(private userservice:Userservice,private counterservice:Counter) { }

  ngOnInit(): void {
    this.auser=this.userservice.activeusers
  }
  onchangetoinactive(id:number){
    this.userservice.changetoinactive(id)
    // this.ai+=1
    // this.counterservice.aiusercount(this.ai)
  }

}
