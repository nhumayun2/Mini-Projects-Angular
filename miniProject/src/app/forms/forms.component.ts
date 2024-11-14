import { Component } from '@angular/core';
import { Interface } from '../Interface/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  display: boolean = false;
  printValue: string = '';
  buttons: string[] = ['Sports Person🤾‍♂️', 'Student🧑‍🎓', 'Teacher🧑‍🏫', 'Banker🏦'];
  genderBtn: string[] = ['Male♂️', 'Female♀️'];
  person: Interface = {
    name: '',
    personType: '',
    gender: '',
    age: 0
  };

  onChangeName(event: any) {
    this.person.name = event.target.value;
  }

  onChangeAge(event: any) {
    this.person.age = +event.target.value;
  }

  selectGender(index: number) {
    this.person.gender = index === 0 ? 'Male' : 'Female';
  }

  selectPersonType(index: number) {
    this.person.personType = this.buttons[index];
  }

  onSubmit() {
    this.display = true;
    this.printValue = JSON.stringify(this.person);
  }

  onReset() {
    this.display = false;
    this.person = {
      name: '',
      personType: '',
      gender: '',
      age: 0
    };
  }
}
