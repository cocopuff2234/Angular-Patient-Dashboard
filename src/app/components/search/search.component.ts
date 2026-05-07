import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface SearchCriteria {
  firstName: string;
  lastName: string;
  dob: string;
  startDate: string;
  endDate: string;
  sex: string;
  residence: string;
  mrn: string;
  idNumber: string;
  ssnLast4: string;
  phone: string;
  email: string;
  hospital: string;
  department: string;
  physician: string;
  conditions: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
    endDate: '',
    sex: '',
    residence: '',
    mrn: '',
    idNumber: '',
    ssnLast4: '',
    phone: '',
    email: '',
    hospital: '',
    department: '',
    physician: '',
    conditions: ''
  };

  setTab(tab: string) {
    console.log('Setting tab to:', tab);
    this.activeTab = tab;
  }

  onSearch() {
  console.log('SEARCH CLICKED', this.criteria);
  this.search.emit(this.criteria);
}
}