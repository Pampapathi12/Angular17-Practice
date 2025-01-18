import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }


//  @Input() set style(style: Object){
  @Input('appStyle') set appStyle(style: Object){

 let styleEntries = Object.entries(style)

 console.log('styleEntries', styleEntries)

 for(let item of styleEntries){
  let[cssStyle, value] = item;
  console.log(cssStyle, value,'cssStyle')
  this.renderer.setStyle(this.element.nativeElement, cssStyle,value)
  // if(){

  // }
 }


 }
}
