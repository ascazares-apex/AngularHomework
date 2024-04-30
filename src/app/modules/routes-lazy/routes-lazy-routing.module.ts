import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyRouteComponent } from '../../components/lazy-route/lazy-route.component';

const routes: Routes = [
  {
    path: '',
    component: LazyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesLazyRoutingModule { }
