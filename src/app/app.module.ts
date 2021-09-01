import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { AccountComponent } from './service-demo/account/account.component';
import { NewAccountComponent } from './service-demo/new-account/new-account.component';
import { Loggingservice } from './service-demo/logging.service';
import { Accountsservice } from './service-demo/accounts.service';
import { ServiceAssignmentComponent } from './service-assignment/service-assignment.component';
import { ActiveusersComponent } from './service-assignment/activeusers/activeusers.component';
import { InactiveusersComponent } from './service-assignment/inactiveusers/inactiveusers.component';
import { Userservice } from './service-assignment/User.service';
import { Counter } from './service-assignment/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceDemoComponent,
    AccountComponent,
    NewAccountComponent,
    ServiceAssignmentComponent,
    ActiveusersComponent,
    InactiveusersComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Loggingservice,Accountsservice,Userservice,Counter],
  bootstrap: [AppComponent]
})
export class AppModule { }
