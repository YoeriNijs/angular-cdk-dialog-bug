import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dialogService: MatDialog) {}

  ngOnInit(): void {
    this.dialogService.open(DialogComponent, { data: { name: 'Hello' }})
      .afterClosed()
      .subscribe(res => console.log(`closed with ${res}`));
  }
}
