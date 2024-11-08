import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hide-show',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './hide-show.component.html',
  styleUrl: './hide-show.component.css'
})
export class HideShowComponent {
// State variables to track visibility of each div
isFirstDivVisible = true;
isSecondDivVisible = true;
areInputsMatching = false;

// Variables for input values in the third div
input1: number | null = null;
input2: number | null = null;

// Methods to control first div
showFirstDiv() {
  this.isFirstDivVisible = true;
}

hideFirstDiv() {
  this.isFirstDivVisible = false;
}

// Method to toggle the second div
toggleSecondDiv() {
  this.isSecondDivVisible = !this.isSecondDivVisible;
}

// Method to check if inputs match and update visibility of the third div
checkInputs() {
  this.areInputsMatching = this.input1 === this.input2 && this.input1 !== null && this.input2 !== null;
}
}
