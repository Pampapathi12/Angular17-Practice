import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {

  title: string = " demo compoentt"
  @Input() message: string;

  // input component are not updated by doing properpty binding from the parent compoennt to child component, 
  //  by the time constructor is called , value initilization will show
  // becasue first time it initilization but after updated value not showing

  constructor(){
    console.log('demo compoennt calles')

    console.log(this.title, this.message)
  }

  // ngonchanges will call every time event occur or inpu value changes on the compoennt
  // beginng it undefeind showing, if any event happen then the ngoncgnages will call every time
  //
  ngOnChanges(changes: SimpleChanges){

    // ngOnchanged will call only the when the previous if value if changed that time it will called


    // to checke the previous value and updated value


    console.log('ngonchages hook called')
    console.log(this.message)
    console.log('p/u', changes['message'].previousValue, changes['message'].currentValue)

  }

}
