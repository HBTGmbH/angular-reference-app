import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersDashboardComponent} from './components/users-dashboard/users-dashboard.component';
import {UsersRoutingModule} from './users-routing.module';
import {StoreModule} from '@ngrx/store';
import {usersReducer} from './store/users.reducer';
import {UserDashboardListComponent} from './components/users-dashboard/user-dashboard-list/user-dashboard-list.component';
import {EffectsModule} from '@ngrx/effects';
import {UsersEffects} from './store/users.effects';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [UsersDashboardComponent, UserDashboardListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
