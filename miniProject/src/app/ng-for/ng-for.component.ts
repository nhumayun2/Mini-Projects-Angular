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
  language: string [] = ['Html','CSS','JavaScript','TypeScript','Angular'];
  

  addCityNames(){
    if(this.newCity.trim() === "") return;
    this.cityNames.push(this.newCity);
    this.newCity = "";
  }

  selectedIndex: number | null = null;

  selectButton(index: number): void {
    this.selectedIndex = index;
}
}
