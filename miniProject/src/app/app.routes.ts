import { Routes } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';

export const routes: Routes = [
    {path: '', component: NgIfComponent},
    {path: 'ng-if', component: NgIfComponent},
    {path: 'ng-for', component: NgForComponent}
];
