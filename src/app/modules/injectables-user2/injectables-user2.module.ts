import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootInjectableUser2Component } from '../../components/root-injectable-user2/root-injectable-user2.component';



@NgModule({
  declarations: [
    RootInjectableUser2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RootInjectableUser2Component
  ]
})
export class InjectablesUser2Module { }
