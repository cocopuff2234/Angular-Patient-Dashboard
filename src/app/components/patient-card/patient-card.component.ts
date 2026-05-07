import { Component, Input } from '@angular/core';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-card',
  standalone: true,
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent {
  @Input() patient!: Patient;
}