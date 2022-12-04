import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css'],
})
export class ErrorpageComponent implements OnInit {
  isAdmin: Boolean;
  constructor(private ActiveRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.isAdmin = this.ActiveRoute.snapshot.url[0].path == 'admin';
  }
}
