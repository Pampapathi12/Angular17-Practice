import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()

  all: number = 0;
  @Input()
  inStock: number =0;
  @Input()
  outOfStock: number = 0;

  // 
  @Output()
  selectedFilterRadioButtonChange: EventEmitter<string> = new EventEmitter<string>()
  // created the custome event and raised the whenever the cange in the filter

  // custom , bind this custom event in the parent component

  selectedFilterRadioButton: string = 'all';
  OnSelectedFilterRadioButtonChange(){
    console.log(this.selectedFilterRadioButton)
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton)
  }


}
