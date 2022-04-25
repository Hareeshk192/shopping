import { Component } from '@angular/core';
//import { Tracing } from 'trace_events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  otp:string='';
  el:number= 3;
  displaydata(data:string)
  {
     this.otp= data;
  }
}
