import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
})
export class FrontComponent implements OnInit {
  scrollToTop() {
    window.scroll(0, 0);
  }

  constructor() {}

  ngOnInit(): void {}
}
