import { Component, OnInit, Input } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  sub='';
  constructor() { }

  ngOnInit(): void {
  }
  change= {
       color: 'red',
       width: '100px',
       border: "1px solid red",
       padding: '10px',
  }
  make()
  {
    this.change['border']= 'blue';
    this.change['padding']= '5px';
  }
  myclass= 
  {
    box: true,
    padding: true,
    border: false
  }
  changeshape()
  {
   this.myclass['border']= true;
  }
  chose(subject:Event)
  {
     this.sub= (<HTMLInputElement>subject.target).value;
  }
  names= ["Hareesh", "Rajpoot", "pratik"];

  obj=[
    {
    name: 'Hareesh',
    roll: '70',
    state: 'up'
  },
  {
    name:'sanjay',
    roll: '81',
    state: 'mp'
  }
];
showsecret:boolean= false;
password:string='tuna';
logs:number[]=[];
arr:number[]=[1,2,3,4,5];
buttonclicked()
{
  this.showsecret= !this.showsecret;
  this.logs.push(this.logs.length +1)
}



}
