import { Component, OnInit, Input} from '@angular/core';
@Component(
    {
        selector:'app-body',
        template:`<p> it is body of app</p>
        <hr> <p> it is body of app</p>
        <p>{{num}}</p>`,
        styles:[
            `p{
                color:blue;
            }
            `
        ]
    }
    
)
export class BodyComponent{
    ngOnInit()
    {}
    constructor(){};
    @Input() num:boolean=true;

  
  }