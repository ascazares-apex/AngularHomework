import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesDynamicRoutingModule } from './routes-dynamic-routing.module';
import { DynamicSlugRouteComponent } from '../../components/dynamic-slug-route/dynamic-slug-route.component';


@NgModule({
  declarations: [
    DynamicSlugRouteComponent
  ],
  imports: [
    CommonModule,
    RoutesDynamicRoutingModule
  ]
})
export class RoutesDynamicModule { }
