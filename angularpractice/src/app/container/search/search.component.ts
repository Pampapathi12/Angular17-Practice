import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  // 1. read,2, static,
  @ViewChild('searchInput') searchInput:ElementRef;
  // viewchild take the 3 paramer , selector, directive, component on the get the dom elments value access
  
  searchText: string = '';
  @Output()
  onSearchTextChanges: EventEmitter<string> = new EventEmitter<string>()
  onSearchTextChange(){
    this.onSearchTextChanges.emit(this.searchText)

  }

  updateSearchText(event: any){
      this.searchText = event.target.value;
  }

  // SetsearchText(InputEL:HTMLInputElement){
  //   // this.searchText = event.target.value;

  //   // console.log(InputEL.value)
  //   this.searchText = InputEL.value;
  //   this.onSearchTextChanges.emit(this.searchText)

  // }

  SetsearchText(){
    // this.searchText = event.target.value;

    // console.log(InputEL.value)
    this.searchText = this.searchInput.nativeElement.value;
    this.onSearchTextChanges.emit(this.searchText)

  }
}