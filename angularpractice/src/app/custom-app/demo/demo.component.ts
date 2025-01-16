import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  title: string = " demo compoentt"
  @Input() message: string = "Hello";

  // input component are not updated by doing properpty binding from the parent compoennt to child component, 
  //  by the time constructor is called , value initilization will show
  // becasue first time it initilization but after updated value not showing

  constructor(){
    console.log('demo compoennt calles')

    console.log(this.title, this.message)
  }

}
