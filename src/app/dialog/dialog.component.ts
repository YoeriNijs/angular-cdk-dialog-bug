import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `<span>Hello, {{ name }}</span>`,
  styleUrls: []
})
export class DialogComponent implements OnInit {

  toggle = false;
  name: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}, public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
    this.name = this.data.name;
  }

  close(): void {
    this.dialogRef.close('pizza');
  }
}
