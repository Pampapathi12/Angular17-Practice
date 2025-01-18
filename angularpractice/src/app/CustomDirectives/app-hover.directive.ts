import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {




  constructor(private element: ElementRef, private renderer: Renderer2) { }

 @HostBinding('style.backgroundColor') backgroundColor: string = '#282828';
 @HostBinding('style.border') border: string = 'none';
 @HostBinding('style.color') color: string = 'white';



 @HostListener('mouseenter') OnMouseEnter(){
this.backgroundColor = 'white';
this.color = '#282828';
this.border = '#282828 3px solid';


 }

 @HostListener('mouseout') OnMouseOut(){
  this.backgroundColor = '#282828';
  this.color = 'white';
  this.border = 'none';
  
  
   }
 // directive class property
//  object will created, property of dom object element, in the button render object of the dom will create and property
//  using hostbinding , we can this property class of property of directive element

}
