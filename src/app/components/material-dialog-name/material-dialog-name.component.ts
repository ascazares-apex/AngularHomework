import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogData } from '../../models/dialog-data';

@Component({
  selector: 'app-material-dialog-name',
  templateUrl: './material-dialog-name.component.html',
  styleUrl: './material-dialog-name.component.scss'
})
export class MaterialDialogNameComponent {
  inputName: string;

  constructor(public dialogRef: MatDialogRef<MaterialDialogNameComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.inputName = data.name;
  }

  onNoClick(): void {
    this.dialogRef.close(this.data.name);
  }
}
