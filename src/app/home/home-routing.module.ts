import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, ParentComponent} from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        /**
         * 路径参数，看起来是 URL 的一部分
         */
        path: ':tabLink',
        component: HomeDetailComponent,
        children: [
          {path: 'grand', component: HomeGrandComponent}
        ]
      }
    ]
  },
  {
    path: 'change-detection',
    pathMatch: 'full',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
