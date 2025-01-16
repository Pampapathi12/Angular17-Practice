import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


 @ContentChild('para') paragraphEl: ElementRef ;
@ContentChild(TestComponent) testEl : TestComponent


@ContentChildren('para')  paraElement : QueryList<ElementRef>;

@ContentChildren(TestComponent) testElement : QueryList<ElementRef>;


 StyleParagraph(){
  console.log(this.paragraphEl.nativeElement)
  console.log(this.testEl.name)


  this.paraElement.forEach((el) =>{
    console.log(el.nativeElement)
  })
  this.testElement.forEach((el1) =>{
    console.log(this.testElement.notifyOnChanges)
  })
 }

}
