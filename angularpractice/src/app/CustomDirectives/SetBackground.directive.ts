import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]' // attribute selector
})

export class SetBackground implements OnInit{


//    @Input('setBackground') backColor: string = '#36454F'; // here setBackground as alias
//    @Input('setBackground1') textColor: string = 'white'
//    @Input() title: string = 'My Title'



  @Input('setBackground') changeTextAndBackColor: {backColor: string, textColor: string}



    // private element: ElementRef
    private renderer2 : Renderer2

    constructor( private element: ElementRef,private renderer: Renderer2){

        // this.renderer2 = renderer;

    //    this.element = element // store the html eleemnt
    //    this.element = element

        // get the reference of element , to the constructor
        // multiple time will call if we use the selector wherever we used

    }

    ngOnInit(){
        // will call the compoent properyty initilized
    //    this.element.nativeElement.style.backgroundColor = '#36454F'; // store the html eleemnt
    //   this.element.nativeElement.style.color = 'white';

    // renderer2
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor','#36454F');
    // this.renderer.setStyle(this.element.nativeElement, 'color','white');// here its color are hardcoed

    // this.renderer.setAttribute(this.element.nativeElement, 'title','This is paragraphe example')

    // property binding in directives

    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor',this.backColor);
    // this.renderer.setStyle(this.element.nativeElement, 'color',this.textColor);// here its color are hardcoed

    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor',this.changeTextAndBackColor.backColor);
    this.renderer.setStyle(this.element.nativeElement, 'color',this. changeTextAndBackColor.textColor);// here its color are hardcoed

    // this.renderer.setAttribute(this.element.nativeElement, 'title','This is paragraphe example')

    // this.renderer.removeClass()

    // render2 create the abstraction between the dom and style using the native element
    // not accesing the the direct dom element
    }

    // nativeelemtn property its gives the direct access to the DOM
    // but it gives acccess the direct access

}