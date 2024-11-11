import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})

export class NgIfComponent {
  checkRadio: string = "";

  task2 : string = "";

  firstDivCondition: boolean = true;

  secondDivCondition: boolean = false;

  thirdDivCurrentCondition: boolean = false;

  thirdDivFInput: Number | undefined;
  thirdDivSInput: Number | undefined;

  //Form information here
  firstName: string = "";
  lastName: string = "";

  //Select option value
  selectDistrict: string = "";
  selectArea: string = "";

  //Select Occupation
  selectOccupation: string = "";

  //Student Array
  studentArray: any[] = [
    { sr: 1, name: 'Rahim', age: 20, district: 'Dhaka', attendance: 80, gender: 'male' },
    { sr: 2, name: 'Karim', age: 21, district: 'Khulna', attendance: 30, gender: 'male' },
    { sr: 3, name: 'John', age: 22, district: 'Barishal', attendance: 45, gender: 'male' },
    { sr: 4, name: 'Farzana', age: 18, district: 'Chattogram', attendance: 95, gender: 'female' },
    { sr: 5, name: 'Amina', age: 19, district: 'Dhaka', attendance: 88, gender: 'female' },
    { sr: 6, name: 'Arif', age: 23, district: 'Sylhet', attendance: 70, gender: 'male' },
    { sr: 7, name: 'Sabrina', age: 20, district: 'Rajshahi', attendance: 82, gender: 'female' },
    { sr: 8, name: 'Tareq', age: 21, district: 'Khulna', attendance: 65, gender: 'male' },
    { sr: 9, name: 'Lubna', age: 18, district: 'Comilla', attendance: 90, gender: 'female' },
    { sr: 10, name: 'Hasan', age: 24, district: 'Mymensingh', attendance: 76, gender: 'male' },
    { sr: 11, name: 'Asif', age: 22, district: 'Rangpur', attendance: 60, gender: 'male' },
    { sr: 12, name: 'Meena', age: 19, district: 'Dhaka', attendance: 92, gender: 'female' },
    { sr: 13, name: 'Saif', age: 20, district: 'Chattogram', attendance: 55, gender: 'male' },
    { sr: 14, name: 'Nadia', age: 23, district: 'Sylhet', attendance: 85, gender: 'female' },
    { sr: 15, name: 'Shahin', age: 21, district: 'Rajshahi', attendance: 78, gender: 'male' },
    { sr: 16, name: 'Rashid', age: 20, district: 'Barishal', attendance: 40, gender: 'male' },
    { sr: 17, name: 'Shamima', age: 22, district: 'Khulna', attendance: 89, gender: 'female' },
    { sr: 18, name: 'Tanvir', age: 24, district: 'Dhaka', attendance: 63, gender: 'male' },
    { sr: 19, name: 'Anika', age: 18, district: 'Comilla', attendance: 97, gender: 'female' },
    { sr: 20, name: 'Fahim', age: 21, district: 'Rangpur', attendance: 42, gender: 'male' },
    { sr: 21, name: 'Sami', age: 23, district: 'Mymensingh', attendance: 75, gender: 'male' },
    { sr: 22, name: 'Lina', age: 20, district: 'Chattogram', attendance: 82, gender: 'female' },
    { sr: 23, name: 'Momin', age: 19, district: 'Sylhet', attendance: 60, gender: 'male' },
    { sr: 24, name: 'Tania', age: 21, district: 'Rajshahi', attendance: 87, gender: 'female' },
    { sr: 25, name: 'Nayeem', age: 22, district: 'Khulna', attendance: 48, gender: 'male' },
    { sr: 26, name: 'Zara', age: 20, district: 'Dhaka', attendance: 92, gender: 'female' },
    { sr: 27, name: 'Moinul', age: 24, district: 'Barishal', attendance: 67, gender: 'male' },
    { sr: 28, name: 'Borna', age: 18, district: 'Chattogram', attendance: 91, gender: 'female' },
    { sr: 29, name: 'Sajjad', age: 23, district: 'Mymensingh', attendance: 73, gender: 'male' },
    { sr: 30, name: 'Raisa', age: 19, district: 'Sylhet', attendance: 84, gender: 'female' }
  ];
  


  //Functions 
  setRadioValue(getValue: string){
    this.checkRadio = getValue + " is selected";
  }

  setTaskTwo(setValue: string){
    this.task2 = setValue;
  }

  firstDiv(condition: boolean){
    this.firstDivCondition = condition;
  }

  secondDiv(){
    this.secondDivCondition = !this.secondDivCondition;
  }

  thirdDivCondtion(){
    if(this.thirdDivFInput === this.thirdDivSInput){
      this.thirdDivCurrentCondition = true;
    } else{
      this.thirdDivCurrentCondition = false;
    }
  }
  
  disctrictValueSet(event: Event){
    this.selectDistrict = (<HTMLInputElement>event.target).value;
  }

  areaValueSet(event: Event){
    this.selectArea = (<HTMLInputElement>event.target).value;
  }

  occupationSet(event: Event){
    this.selectOccupation = (<HTMLInputElement>event.target).value;
  }

}
