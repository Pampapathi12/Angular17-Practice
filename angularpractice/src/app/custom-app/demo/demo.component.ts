import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,OnInit {

  title: string = " demo compoentt"
  // @Input() message: string;
  @Input() message: string[]; // array is refrence type, reference not changed, message propertty not changes thats why ngonchanges hook not cllaed, refernce of message type is changed the ngonchanges life cycle will called
   @ViewChild('temp') tempPara : ElementRef

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

  ngOnInit(){
    // its provide by onInit interface
    // called first change detections
    // 

    console.log('ng on init called')
    console.log('tep',this.tempPara.nativeElement)// it retirning undefined// by the view is not created, child, projected content or not created

  }

}
