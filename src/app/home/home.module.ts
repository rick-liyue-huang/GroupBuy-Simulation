import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import {
  ChildComponent,
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  ParentComponent
} from './components';
import {token} from '../services';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [
    {
      provide:  token, useValue: 'http://local.develop'
    }
  ]
})
export class HomeModule { }
