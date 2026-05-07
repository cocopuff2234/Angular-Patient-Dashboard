import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-panel',
  standalone: true,
  templateUrl: './patient-panel.component.html',
  styleUrls: ['./patient-panel.component.css']
})
export class PatientPanelComponent {
  activeTab = 'today';

  setTab(tab: string) {
    this.activeTab = tab;
  }
}