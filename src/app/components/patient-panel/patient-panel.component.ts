import { Component } from '@angular/core';
import { PatientCardComponent } from '../patient-card/patient-card.component';
import { Patient } from '../../models/patient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-panel',
  standalone: true,
  // common module is needed for ngFor in patient card
  imports: [CommonModule, PatientCardComponent],
  templateUrl: './patient-panel.component.html',
  styleUrls: ['./patient-panel.component.css']
})
export class PatientPanelComponent {
  activeTab = 'today';

  patients: Patient[] = [
  {
    name: 'Ashley Citarella',
    dob: '07/02/1958',
    sex: 'Female',
    residence: 'Boston, MA',
    mrn: 'YTK12345678',
    idNumber: 'NHL12345678',
    ssnLast4: '0000',
    phone: '(000)-000-0000',
    email: 'ashcitarella@email.com',
    hospital: 'Massachusetts Medical Group',
    department: 'Department of Cardiology',
    physician: 'Dr. Beth Smith',
    conditions: 'COPD, CHF, Diabetes (Type II)',
    nextAppointment: 'Today 9:00 am',
    avatar: 'https://i.pravatar.cc/100?img=5'
  },
  {
    name: 'Albert Johnson',
    dob: '01/15/1952',
    sex: 'Male',
    residence: 'Waltham, MA',
    mrn: 'YTK12343675',
    idNumber: 'NHL12345678',
    ssnLast4: '1111',
    phone: '(111)-111-1111',
    email: 'aljohnson1952@email.com',
    hospital: 'Massachusetts Medical Group',
    department: 'Department of Cardiology',
    physician: 'Dr. Beth Smith',
    conditions: 'CHF',
    nextAppointment: 'Today 10:00 pm',
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    name: 'Leslie Isabelle Wang',
    dob: '03/12/1985',
    sex: 'Female',
    residence: 'Mooselookmeguntic, ME',
    mrn: 'YTK12343675',
    idNumber: 'NHL12345678',
    ssnLast4: '2222',
    phone: '(222)-222-2222',
    email: 'leslie.wang@email.com',
    hospital: 'Massachusetts Medical Group',
    department: 'Department of Cardiology',
    physician: 'Dr. Beth Smith',
    conditions: 'CHF',
    nextAppointment: 'Today 11:00 pm',
    avatar: 'https://i.pravatar.cc/100?img=32'
  },
  {
    name: 'Adela Bašić',
    dob: '03/12/1950',
    sex: 'Female',
    residence: 'Boston, MA',
    mrn: 'YTK12343675',
    idNumber: 'NHL12345678',
    ssnLast4: '3333',
    phone: '(333)-333-3333',
    email: 'adela.basic@email.com',
    hospital: 'Massachusetts Medical Group',
    department: 'Department of Cardiology',
    physician: 'Dr. Beth Smith',
    conditions: 'CHF',
    nextAppointment: 'Today 1:30 pm',
    avatar: 'https://i.pravatar.cc/100?img=45'
  },
  {
    name: 'Reza Saatchi',
    dob: '03/12/1957',
    sex: 'Male',
    residence: 'Boston, MA',
    mrn: 'YTK12343675',
    idNumber: 'NHL12345678',
    ssnLast4: '4444',
    phone: '(444)-444-4444',
    email: 'reza.saatchi@email.com',
    hospital: 'Massachusetts Medical Group',
    department: 'Department of Cardiology',
    physician: 'Dr. Beth Smith',
    conditions: 'CHF',
    nextAppointment: 'Today 2:30 pm',
    avatar: 'https://i.pravatar.cc/100?img=22'
  },
  {
    name: 'Arjun Chandrasekar',
    dob: '03/12/1958',
    sex: 'Male',
    residence: 'New York City, NY',
    mrn: 'YTK12343675',
    idNumber: 'NHL12345678',
    ssnLast4: '5555',
    phone: '(555)-555-5555',
    email: 'arjun@email.com',
    hospital: 'Massachusetts Medical Group',
    department: 'Department of Cardiology',
    physician: 'Dr. Beth Smith',
    conditions: 'CHF',
    nextAppointment: 'Today 3:30 pm',
    avatar: 'https://i.pravatar.cc/100?img=60'
  }
];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}