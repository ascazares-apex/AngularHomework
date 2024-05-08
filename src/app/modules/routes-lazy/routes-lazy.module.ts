import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesLazyRoutingModule } from './routes-lazy-routing.module';
import { LazyRouteComponent } from '../../components/lazy-route/lazy-route.component';


@NgModule({
  declarations: [
    LazyRouteComponent
  ],
  imports: [
    CommonModule,
    RoutesLazyRoutingModule
  ]
})
export class RoutesLazyModule { }
