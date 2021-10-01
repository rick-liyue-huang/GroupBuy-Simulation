import { NgModule } from '@angular/core';
import { MyAccountRoutingModule } from './my-account-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    MyAccountRoutingModule
  ]
})
export class MyAccountModule { }
