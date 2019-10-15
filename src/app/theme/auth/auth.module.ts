import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRouting} from './auth.routing';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AuthRouting,
    SharedModule
  ],
  declarations: []
})
export class AuthModule { }
