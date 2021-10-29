import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-open-trailer',
  templateUrl: './open-trailer.component.html',
  styleUrls: ['./open-trailer.component.scss'],
})
export class OpenTrailerComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OpenTrailerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('movie');
  }

  ngOnInit(): void {}
}
