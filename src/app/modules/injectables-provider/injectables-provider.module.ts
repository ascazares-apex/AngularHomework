import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitedInjectableComponent } from '../../components/limited-injectable/limited-injectable.component';


@NgModule({
  declarations: [
    LimitedInjectableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LimitedInjectableComponent
  ]
})
export class InjectablesProviderModule { }
