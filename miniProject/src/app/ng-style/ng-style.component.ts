import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

  //first task variables
  defaultDivStyle: string = '';

  height: string = '100px';
  width: string = '100px';
  radius: string = '50%';
  rgb: string = 'rgb(0, 0, 0)';

  constructor(){
    this.defaultDivStyle = 'firstDiv';
  }

  //second task variables
  currentProcess: string = '0%';

  //first task functions

  //firstdiv
  changeBgSuccess(){
    this.defaultDivStyle = 'bg-success';
  }

  changeBgDanger(){
    this.defaultDivStyle = 'bg-danger';
  }

  //Second div 
  changeWidth(val: any){
    this.width = val.target.value + 'px';
    console.log(typeof(this.width));
  }

  changeHeight(val: any){
    this.height = val.target.value + 'px';

  }

  changeRadius(val: any){
    this.radius = val.target.value + '%';

  }

  changeColor(val: any){
    this.rgb = val.target.value;
    console.log(this.rgb);
  }

  processBar(val: any){
    //this.currentProcess = "";
    this.currentProcess = +val.target.value + '%';
    console.log(typeof(this.currentProcess));
    console.log(this.currentProcess);
  }

}
