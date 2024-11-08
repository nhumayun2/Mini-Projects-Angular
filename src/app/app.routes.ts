import { Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ButtonGSComponent } from './button-gs/button-gs.component';
import { HideShowComponent } from './hide-show/hide-show.component';

export const routes: Routes = [
    { path: '', component:ButtonGSComponent},
    { path: 'hide', component:HideShowComponent}
];
