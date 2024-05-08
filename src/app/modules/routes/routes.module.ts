import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { SimpleRouteComponent } from '../../components/simple-route/simple-route.component';
import { RoutesLoaderComponent } from '../../components/routes-loader/routes-loader.component';
import { AngularMaterialModule } from '../angular-material.module';
import { RoutesDynamicModule } from '../routes-dynamic/routes-dynamic.module';


@NgModule({
  declarations: [
    SimpleRouteComponent,
    RoutesLoaderComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    AngularMaterialModule,
    RoutesDynamicModule
  ],
  exports: [
    RoutesLoaderComponent
  ]
})
export class RoutesModule { }
