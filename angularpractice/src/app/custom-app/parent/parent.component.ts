import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {



  @ViewChild('para') paraEl : ElementRef;


  ShowParaValue(){
    console.log(this.paraEl.nativeElement)
  }
}
