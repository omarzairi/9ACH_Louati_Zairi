import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: User[];
  constructor(private auth: AuthUserService) {}

  ngOnInit(): void {
    this.auth.getAllusers().subscribe((users) => (this.clients = users));
  }
}
