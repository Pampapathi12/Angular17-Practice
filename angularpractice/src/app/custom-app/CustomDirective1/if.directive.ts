import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]' // structural directive
})
export class IfDirective {

  //1. manipulate the dom, add or reove
  // dom element access
  // place from where we want remove or add the DOM element

  constructor( private view: TemplateRef<any>, private template: ViewContainerRef) { }

  @Input('appIf') set appIf(value: boolean){

    if(value){

      // render the view inside the ng-template


      this.template.createEmbeddedView(this.view)

    }else{

      this.template.clear()

    }

  }

  // here get the view
  // refence of the ngIf template

}
