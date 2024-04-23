import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialDialogComponent } from '../components/material-dialog/material-dialog.component';
import { MaterialDialogNameComponent } from '../components/material-dialog-name/material-dialog-name.component';

const AngularMaterialModules: Array<Type<unknown>> = [MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule];

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
    MaterialDialogComponent
  ]
})
export class AngularMaterialModule { }
