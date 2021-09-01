import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter.service';
import { Userservice } from '../User.service';

@Component({
  selector: 'app-inactiveusers',
  templateUrl: './inactiveusers.component.html',
  styleUrls: ['./inactiveusers.component.css']
})
export class InactiveusersComponent implements OnInit {
  iuser : string []= []
  // ia = 0
  constructor(private userservice:Userservice,private counterservice :Counter) { }

  ngOnInit(): void {
    this.iuser=this.userservice.inactiveusers
  }
  changetoactive(id:number){
    this.userservice.changetoactive(id)
    // this.ia+=1
    // this.counterservice.iausercount(this.ia)
  }

}
