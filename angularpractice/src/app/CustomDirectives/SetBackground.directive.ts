import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[setBackground]' // attribute selector
})

export class SetBackground implements OnInit{


    // private element: ElementRef

    constructor( private element: ElementRef){

    //    this.element = element // store the html eleemnt
    //    this.element = element

        // get the reference of element , to the constructor
        // multiple time will call if we use the selector wherever we used

    }

    ngOnInit(){
        // will call the compoent properyty initilized
       this.element.nativeElement.style.backgroundColor = '#36454F'; // store the html eleemnt
      this.element.nativeElement.style.color = 'white';
    }

}