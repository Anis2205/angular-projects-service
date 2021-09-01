import { Component, OnInit } from '@angular/core';
import { Counter } from './counter.service';

@Component({
  selector: 'app-service-assignment',
  templateUrl: './service-assignment.component.html',
  styleUrls: ['./service-assignment.component.css'],
  providers:[Counter]
})
export class ServiceAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
