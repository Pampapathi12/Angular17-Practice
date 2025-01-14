import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  searchText: string = '';
  @Output()
  onSearchTextChanges: EventEmitter<string> = new EventEmitter<string>()
  onSearchTextChange(){
    this.onSearchTextChanges.emit(this.searchText)

  }

  updateSearchText(event: any){
      this.searchText = event.target.value;
  }
}