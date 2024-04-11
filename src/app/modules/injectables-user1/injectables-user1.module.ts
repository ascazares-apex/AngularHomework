import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootInjectableUser1Component } from '../../components/root-injectable-user1/root-injectable-user1.component';



@NgModule({
  declarations: [
    RootInjectableUser1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RootInjectableUser1Component
  ]
})
export class InjectablesUser1Module { }
