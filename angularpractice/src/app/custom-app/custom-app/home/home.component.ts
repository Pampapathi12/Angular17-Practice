import { Component, ElementRef, ViewChildren, ViewChild, QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title: string = ' compoennt intialiaztion'

  destroy: boolean = false;

  inputVal: string = '';
  // inputVal: string[] = ['hello', 'hi there'];

  constructor(){
    console.log('home compoennt called')
  }


// retunr singel elemtn and first elemnt the which matches the selector
//  @ViewChild('inputEl') inputElements : ElementRef;
fullName: string = '';

@ViewChildren('inputEl')inputElements :  QueryList< ElementRef>




  show(){

    let name = ''

    // console.log(this.inputElements.nativeElement);
   this.inputElements.forEach((el) =>{
      console.log(el.nativeElement.value)

      name += el.nativeElement.value + ' '
    })
    this.fullName = name.trim()

  }

  toggle: boolean = true;

  onToggle(){

    this.toggle = !this.toggle;

  }
  onBtnClick(inputEl: HTMLInputElement){


    // this.inputVal.push(inputEl.value);
    this.inputVal =inputEl.value;
  }

  ngAfterViewInit(){

    // after view template of component and view template of child component is initialized
    // this will call only the changed deection at first time


   
    // console.log('ngAfterViewInit called parent')// all the life and child component projected
    // console.log('ngafterviewnint123', this.paraConten.nativeElement)


  }

  ngAfterViewChecked(){

    // when the view changed, ngafterviewchkecd will call
    // child compoennt alos changed then 
    // each change detection it will even if the value not changed
    console.log('ngAfterViewChecked parent called')

    // when the value tempPara wii chang we can get the updated vlue
    // console.log( 'ngAfterViewChecked called13', this.tempPara.nativeElement)

  }
  destroyComponent(){
    this.destroy = !this.destroy
  }
  ngOnDestroy(){

    console.log('ngOnDestroy parent called')

  }

}
