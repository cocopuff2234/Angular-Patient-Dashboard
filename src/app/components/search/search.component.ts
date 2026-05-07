import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface SearchCriteria {
  firstName: string;
  lastName: string;
  dob: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  activeTab = 'basic';

  @Output() search = new EventEmitter<SearchCriteria>();

  criteria: SearchCriteria = {
    firstName: '',
    lastName: '',
    dob: '',
    startDate: '',
    endDate: ''
  };

  setTab(tab: string) {
    this.activeTab = tab;
  }

  onSearch() {
  console.log('SEARCH CLICKED', this.criteria);
  this.search.emit(this.criteria);
}
}