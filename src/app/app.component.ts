import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(PatientPanelComponent) patientPanel!: PatientPanelComponent;
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

      const sexMatch =
        !criteria.sex || patient.sex === criteria.sex;

      const residenceMatch =
        !criteria.residence || patient.residence.toLowerCase().includes(criteria.residence.toLowerCase());

      const mrnMatch =
        !criteria.mrn || patient.mrn.toLowerCase().includes(criteria.mrn.toLowerCase());

      const idNumberMatch =
        !criteria.idNumber || patient.idNumber.toLowerCase().includes(criteria.idNumber.toLowerCase());

      const ssnMatch =
        !criteria.ssnLast4 || patient.ssnLast4.includes(criteria.ssnLast4);

      const phoneMatch =
        !criteria.phone || patient.phone.includes(criteria.phone);

      const emailMatch =
        !criteria.email || patient.email.toLowerCase().includes(criteria.email.toLowerCase());

      const hospitalMatch =
        !criteria.hospital || patient.hospital.toLowerCase().includes(criteria.hospital.toLowerCase());

      const departmentMatch =
        !criteria.department || patient.department.toLowerCase().includes(criteria.department.toLowerCase());

      const physicianMatch =
        !criteria.physician || patient.physician.toLowerCase().includes(criteria.physician.toLowerCase());

      const conditionsMatch =
        !criteria.conditions || patient.conditions.toLowerCase().includes(criteria.conditions.toLowerCase());

      return firstMatch && lastMatch && dobMatch && sexMatch && residenceMatch &&
             mrnMatch && idNumberMatch && ssnMatch && phoneMatch && emailMatch &&
             hospitalMatch && departmentMatch && physicianMatch && conditionsMatch;
    });

    // Switch to search results tab
    if (this.patientPanel) {
      this.patientPanel.setTab('results');
    }
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year}`;
  }
}