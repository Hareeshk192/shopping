import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   f:boolean= true;
   d:number = 5;
   name:string='';
   username:string='Hareesh';
   emptyuname:boolean= false;
  img:any= "C:\Users\NHI192\Downloads/1.jpg";
  constructor() { 
    setTimeout(()=>{
      this.f= false;
    },5000);

    alert("Hello world");
    this.username='Hareesh';
    if(this.username=='')
    this.emptyuname= true;
  }
  fu()
   {
       this.d=10;
   }
   
  ngOnInit(): void {
  }

  myname(event:Event)
  {
    this.name= (<HTMLInputElement>event.target).value;
  }
  getname(temp:Event)
  {
    this.username= (<HTMLInputElement>temp.target).value;
  }
  makeempty()
  {
    this.username='';
    this.emptyuname=true;
  }
  
  
}
