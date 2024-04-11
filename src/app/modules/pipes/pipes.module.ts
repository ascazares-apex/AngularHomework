import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesImplementerComponent } from '../../components/pipes-implementer/pipes-implementer.component';
import { CapitalizedVersionPipe } from '../../pipes/capitalized-version.pipe';



@NgModule({
  declarations: [
    PipesImplementerComponent,
    CapitalizedVersionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesImplementerComponent
  ]
})
export class PipesModule { }
