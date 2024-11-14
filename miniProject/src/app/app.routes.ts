import { Routes } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormsComponent } from './forms/forms.component';

export const routes: Routes = [
    {path: '', component: NgIfComponent},
    {path: 'ng-if', component: NgIfComponent},
    {path: 'ng-for', component: NgForComponent},
    {path: 'ng-class', component: NgClassComponent},
    {path: 'ng-style', component: NgStyleComponent},
    {path: 'ng-form', component: FormsComponent}
];
