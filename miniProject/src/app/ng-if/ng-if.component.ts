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
}
