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
      
    }
}
