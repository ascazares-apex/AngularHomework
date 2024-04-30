import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleRouteComponent } from '../../components/simple-route/simple-route.component';
import { RoutesLazyModule } from '../routes-lazy/routes-lazy.module';
import { DynamicSlugRouteComponent } from '../../components/dynamic-slug-route/dynamic-slug-route.component';

const routes: Routes = [
  {
    path: 'routes/simple',
    component: SimpleRouteComponent
  },
  {
    path: 'routes/lazy',
    loadChildren: (): Promise<typeof RoutesLazyModule> =>
      import('../routes-lazy/routes-lazy.module').then(
        (m: any): typeof RoutesLazyModule => m.RoutesLazyModule
      )
  },
  {
    path: 'routes/dynamic',
    children: [
      {
        path: ':slug',
        component: DynamicSlugRouteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
