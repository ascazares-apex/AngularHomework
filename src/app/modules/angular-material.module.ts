import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialDialogComponent } from '../components/material-dialog/material-dialog.component';
import { MaterialDialogNameComponent } from '../components/material-dialog-name/material-dialog-name.component';

const AngularMaterialModules: Array<Type<unknown>> = [
  MatButtonModule, MatDialogModule,
  MatFormFieldModule, MatInputModule,
  MatTabsModule
];

@NgModule({
  declarations: [
    MaterialDialogComponent,
    MaterialDialogNameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModules
  ],
  exports: [
    AngularMaterialModules,
    MaterialDialogComponent
  ]
})
export class AngularMaterialModule { }
