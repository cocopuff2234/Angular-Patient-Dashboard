import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent, SearchCriteria } from './components/search/search.component';
import { PatientPanelComponent } from './components/patient-panel/patient-panel.component';
import { Patient } from './models/patient.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchComponent, PatientPanelComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPatients: Patient[] = [
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
    }
  ];

  displayedPatients: Patient[] = this.allPatients;

  handleSearch(criteria: SearchCriteria) {
    this.displayedPatients = this.allPatients.filter(patient => {
      const name = patient.name.toLowerCase();

      const firstMatch =
        !criteria.firstName || name.includes(criteria.firstName.toLowerCase());

      const lastMatch =
        !criteria.lastName || name.includes(criteria.lastName.toLowerCase());

      const dobMatch =
        !criteria.dob || patient.dob === this.formatDate(criteria.dob);

      return firstMatch && lastMatch && dobMatch;
    });
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year}`;
  }
}