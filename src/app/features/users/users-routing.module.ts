import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersDashboardComponent,
      }
    ])
  ]
})
export class UsersRoutingModule { }
