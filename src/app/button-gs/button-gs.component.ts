import { Component } from '@angular/core';

@Component({
  selector: 'app-button-gs',
  standalone: true,
  imports: [],
  templateUrl: './button-gs.component.html',
  styleUrl: './button-gs.component.css'
})
export class ButtonGSComponent {
  value = '';
  
  changeValue(newValue: string){
    this.value=newValue;
  }
}
