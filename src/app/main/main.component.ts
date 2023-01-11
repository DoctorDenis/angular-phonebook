import { Component } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  contactsList: Contact[] = [
    { name: 'Denis', number: '06812345678', age: 36 },
    { name: 'Vika', number: '06811111111', age: 35 },
    { name: 'Polya', number: '06822222222', age: 10 },
  ];

  
}
