import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {




  textValue: string = 'Hello value'
  logValue(){
    console.log(' on ficud called')
  }

}



