import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, 
  ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, 
  SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  title: string = " demo compoentt"
  @Input() message: string;
  // @Input() message: string[]; // array is refrence type, reference not changed, message propertty not changes thats why ngonchanges hook not cllaed, refernce of message type is changed the ngonchanges life cycle will called
   @ViewChild('temp') tempPara : ElementRef // this temp para tempPara will assing just before ngafterviewinit called

  @ContentChild('temp') paraConten: ElementRef;

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
    // will call when the input propeort chnages

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
    // console.log('tep',this.tempPara.nativeElement)// it retirning undefined// by the view is not created, child, projected content or not created

  }

  ngDoCheck(){

    // change Detection cycle run then ngDoCheck will call


    console.log('ngDocheck hook called')

    console.log('in do check', this.paraConten)// projectted content not intialized 
  }

  ngAfterContentInit(){

    // after those projected content initalized then will it call

    // if dont have projected content then also it will call

    console.log('ngafter content init called')
    console.log('in do check123', this.paraConten.nativeElement)// before hook called the projected

  }

  ngAfterContentChecked(){

    console.log('ngafter content checked')
    console.log('ngAfterContentChecked', this.paraConten.nativeElement) // each change detection will call


  }

  ngAfterViewInit(){

    // after view template of component and view template of child component is initialized
    // this will call only the changed deection at first time


   
    console.log('ngAfterViewInit called')
    console.log('ngafterviewnint123', this.paraConten.nativeElement)


  }

  ngAfterViewChecked(){

    // when the view changed, ngafterviewchkecd will call
    // child compoennt alos changed then 
    // each change detection it will even if the value not changed
    console.log('ngAfterViewChecked called')

    // when the value tempPara wii chang we can get the updated vlue
    console.log( 'ngAfterViewChecked called13', this.tempPara.nativeElement)

  }
  ngOnDestroy(){

    console.log('ngOnDestroy called')

  }

}
