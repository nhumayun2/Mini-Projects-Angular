import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityNames: string[] = ['Dhaka'];
  newCity: string = "";

  addCityNames(){
    this.cityNames.push(this.newCity);
    this.newCity = "";
  }
}
