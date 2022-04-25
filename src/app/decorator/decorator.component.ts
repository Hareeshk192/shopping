import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {

  constructor() { 
    }
  @Input() inp:string='';
  @Output() eve:EventEmitter<string>= new EventEmitter<string>();
  val:string ="";
  getvalue(data:string)
  {
    this.eve.emit(data);
  }
  
  

  ngOnInit(): void {
  }

}
