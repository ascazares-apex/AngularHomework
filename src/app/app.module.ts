import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { CapitalizeDirectiveDirective } from './directives/capitalize-directive.directive';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    CustomDirectivesComponent,
    CapitalizeDirectiveDirective,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
