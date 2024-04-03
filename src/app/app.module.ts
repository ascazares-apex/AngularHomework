import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './components/attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { CapitalizeDirectiveDirective } from './directives/capitalize-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    CustomDirectivesComponent,
    CapitalizeDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
