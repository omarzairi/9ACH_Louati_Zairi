import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  query: String;
  getSearch(s: String) {
    this.query = s;
  }
  scrollToTop() {
    window.scroll(0, 0);
  }
  constructor() {}

  ngOnInit(): void {}
}
