import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent {

  constructor(public dialogRef: MatDialogRef<TermsAndConditionsComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
