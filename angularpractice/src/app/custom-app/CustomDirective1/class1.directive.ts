import { Directive , ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appClass1]'
})
export class Class1Directive {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
 
  //  @Input() set display(value:object){
    @Input('appClass1') set appClass1(value:object){ // using the alias name ('appClass1')
   let entries = Object.entries(value) // return as araay , entries
   for(let item of entries){
    console.log(item[0], item[1])
    let[className,condition]  = item; // array destruing

    // if(item[1]){
    //   this.renderer.addClass(this.element.nativeElement, item[0])
    // }

    if(condition){
      this.renderer.addClass(this.element.nativeElement, className)
    }

   }
   console.log('array', entries)
   };

}
