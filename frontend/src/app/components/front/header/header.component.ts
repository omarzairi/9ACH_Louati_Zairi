import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  query: String;
  getSearch(s) {
    this.query = s;
  }
  constructor() {}

  ngOnInit(): void {}
}
