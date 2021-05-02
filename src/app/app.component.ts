import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-component',
  template: `<span>Hello, {{ name }}</span>`,
  styleUrls: []
})
export class AppComponent implements OnInit {

  toggle = false;
  name: string;

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.name = this.data.name;
  }
}
