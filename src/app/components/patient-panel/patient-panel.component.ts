import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientCardComponent } from '../patient-card/patient-card.component';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-panel',
  standalone: true,
  imports: [CommonModule, PatientCardComponent],
  templateUrl: './patient-panel.component.html',
  styleUrls: ['./patient-panel.component.css']
})
export class PatientPanelComponent {
  @Input() patients: Patient[] = [];

  activeTab = 'today';

  setTab(tab: string) {
    this.activeTab = tab;
  }
}