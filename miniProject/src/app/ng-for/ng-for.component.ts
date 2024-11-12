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
  multiply: any;
  numbers = [1,2,3,4,5,6,7,8,9,10];
  multiplyTable : number[] = [];
  selectedIndex: number | null = null;
  task5: any[] = [
    {pageUrl:'https://voidchetan.github.io/voidchetan/angular/ngIf.html', linkTest: 'ngIf' },
    {pageUrl:'https://voidchetan.github.io/voidchetan/angular/ngfor.html', linkTest: 'ngFor' },
    {pageUrl:'https://voidchetan.github.io/voidchetan/angular/ngclass.html', linkTest: 'ngCwitch' },
    {pageUrl:'https://voidchetan.github.io/voidchetan/angular/ngStyle.html', linkTest: 'ngStyle' },
    {pageUrl:'https://voidchetan.github.io/voidchetan/angular/forms.html', linkTest: 'Forms' },
  ]
  //task6
  city: any[] = [
    {cityId: 1, cityName: 'Dhaka'},
    {cityId: 2, cityName: 'Chittagong'},
    {cityId: 3, cityName: 'Sylhet'},
    {cityId: 4, cityName: 'Rajshahi'},
    {cityId: 5, cityName: 'Khulna'},
    {cityId: 6, cityName: 'Barishal'},
    {cityId: 7, cityName: 'Rangpur'},
    {cityId: 8, cityName: 'Mymensingh'}
  ];

  station: any[] = [
    {stationId: 1, stationName: 'Kamalapur'},
    {stationId: 2, stationName: 'Chittagong'},
    {stationId: 3, stationName: 'Sylhet'},
    {stationId: 4, stationName: 'Rajshahi'},
    {stationId: 5, stationName: 'Khulna'},
    {stationId: 6, stationName: 'Barishal'},
    {stationId: 7, stationName: 'Rangpur'},
    {stationId: 8, stationName: 'Mymensingh'}
  ]

  sixthTaskPrint: number = 0;

  //first task
  addCityNames(){
    if(this.newCity.trim() === "") return;
    this.cityNames.push(this.newCity);
    this.newCity = "";
  }
  
  //second task
  selectButton(index: number): void {
    this.selectedIndex = index;
  }

  //third task
  thirdTask(){
    this.multiplyTable = [];

    if(!this.multiply || this.multiply <= 0){
      alert("Please enter a number to multiply");
    }

    //multiply the numbers with the given number
    this.numbers.forEach(element => {
      element = element * this.multiply;
      this.multiplyTable.push(element);
    });
    
    console.log("Table of " + this.multiply + " is: " + this.multiplyTable);

  }

  //Fourth task didnt need any logics

  //Fifth task didnt need any logics

  //Sixth task
  sixthTask(val: number){
    this.sixthTaskPrint = val;
    console.log("Selected city id is: " + val);
  }

}
