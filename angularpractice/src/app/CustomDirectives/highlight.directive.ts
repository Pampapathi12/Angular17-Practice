import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // add the selector property
})
export class HighlightDirective {

  // zoom in and zoom out specific product, listen mouse enter event and mouse out event, to the host element
  // listen the host event from the host elemnt


 



  constructor( private element: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter') OnMouseEnter(){
   // how angular know mouse in and mouse out

   this.renderer.addClass(this.element.nativeElement, 'highlight-product')
    
  }

 
 @HostListener('mouseout') OnMouseOut(){

  this.renderer.removeClass(this.element.nativeElement, 'highlight-product')

  // mouseout is event type parameter

  }

}
