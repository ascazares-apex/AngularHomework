import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MaterialDialogNameComponent } from '../material-dialog-name/material-dialog-name.component';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrl: './material-dialog.component.scss'
})
export class MaterialDialogComponent {
  name!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MaterialDialogNameComponent, { data: {name: this.name}, hasBackdrop: false });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;
    });
  }
}
