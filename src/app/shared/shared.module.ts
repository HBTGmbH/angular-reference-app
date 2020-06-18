import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiModule} from '@api/api.module';
import {HttpClientModule} from '@angular/common/http';


const dependencies = [
  HttpClientModule,
  ApiModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...dependencies
  ],
  exports: [...dependencies]
})
export class SharedModule { }
