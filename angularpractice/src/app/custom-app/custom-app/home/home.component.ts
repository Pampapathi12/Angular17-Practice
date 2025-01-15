import { Component, ElementRef, ViewChildren, ViewChild, QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


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

}
