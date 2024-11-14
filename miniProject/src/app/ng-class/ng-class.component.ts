import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent implements OnInit {

  //for all the tasks title
  headingClass: string = 'heading';
  btnStyle: string = 'buttonStyle';
  btnSuccess: string = 'buttonStyle-success';
  btnDanger: string = 'buttonStyle-danger';

  //for task 1
  divClass: string = '';

  //for task 2
  task2: string = 'bg-success';

  //for task 3
  divStyle: string = 'div-';
  languages: string[] = ['Angular', 'React', 'Vue', 'Ember', 'Backbone'];
  currentBtn: number | null = null;

  //task 4
  sidePanel: boolean = false;
  firstDivClass: string = '';

  //task 5
  students: any[] = [
    { studId: 1, name: "Alice", isActive: true, gender: "Female", state: "CA" },
    { studId: 2, name: "Bob", isActive: false, gender: "Male", state: "NY" },
    { studId: 3, name: "Charlie", isActive: true, gender: "Male", state: "TX" },
    { studId: 4, name: "David", isActive: true, gender: "Male", state: "CA" },
    { studId: 5, name: "Eve", isActive: false, gender: "Female", state: "NY" }
  ];

  //task 6
  currentSelectedStudentRow: number | null = null;
  

    ngOnInit(): void {
      this.divClass = 'my-class';
      this.btnStyle;
      this.btnSuccess;
      this.btnDanger;
    }

    //task 2
    toggleClass(){
      this.task2 = this.task2 === 'bg-success' ? 'bg-danger' : 'bg-success';
      console.log('toggle class');
    }

    //task 3
    clickEventTskthree(condition: string){
      this.divStyle = 'div-';
      this.divStyle = this.divStyle+condition;
      console.log(this.divStyle);
    }

    clickTrigger(val: number){
      this.currentBtn = val;
    }

    addSidePanel(){
      this.sidePanel = true;
      this.firstDivClass = 'col-7';
    }

    removeSidePanel(){
      this.sidePanel = false;
      this.firstDivClass = 'col-12';
    }

    selectStudentRow(val: number){
      this.currentSelectedStudentRow = val;
      console.log('selected row: ', this.currentSelectedStudentRow);
    }

}
