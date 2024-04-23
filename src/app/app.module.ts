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
import { MyFirstModuleModule } from './modules/my-first-module/my-first-module.module';
import { InjectablesProviderModule } from './modules/injectables-provider/injectables-provider.module';
import { InjectablesUser1Module } from './modules/injectables-user1/injectables-user1.module';
import { InjectablesUser2Module } from './modules/injectables-user2/injectables-user2.module';
import { PipesModule } from './modules/pipes/pipes.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './modules/angular-material.module';

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
    FormsModule,
    MyFirstModuleModule,
    InjectablesProviderModule,
    InjectablesUser1Module,
    InjectablesUser2Module,
    PipesModule,
    AngularMaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
