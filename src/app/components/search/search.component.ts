import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  activeTab = 'basic';

  setTab(tab: string) {
    this.activeTab = tab;
  }
}