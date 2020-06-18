import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'users',
        loadChildren: () => import('./features/users/users.module').then(value => value.UsersModule)
      }
    ])
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {

}
