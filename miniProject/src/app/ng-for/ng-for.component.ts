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
  company: any[] = [
    {id: 1, name: 'Nvdia'},
    {id: 2, name: 'Intel'},
    {id: 3, name: 'AMD'},
    {id: 4, name: 'Qualcomm'},
  ]

  product: any[] = [
    {id: 1, name: 'RTX 3090', companyId: 1},
    {id: 2, name: 'RTX 3080', companyId: 1},
    {id: 3, name: 'Intel i9', companyId: 2},
    {id: 4, name: 'Intel i7', companyId: 2},
    {id: 5, name: 'Ryzen 9', companyId: 3},
    {id: 6, name: 'Ryzen 7', companyId: 3},
    {id: 7, name: 'Snapdragon 888', companyId: 4},
    {id: 8, name: 'Snapdragon 865', companyId: 4}
  ]
  
  //this is bad approach to do this task??
  sixthTaskPrint: number|null = null;

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
  sixthTask(event: any){
    this.sixthTaskPrint = event.target.value;
    console.log(this.sixthTaskPrint);
  }

  testValue: any;
  //test function
  /*testFunction(event: any){
    this.testValue = event.target.value;
    console.log(this.testValue);
  }*/

}
