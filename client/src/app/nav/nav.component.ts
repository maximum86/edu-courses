import { Token } from '../_models/token';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {}

  getCurrentToken() {
    this.accountService.currentToken$.subscribe({
      error: error => console.log(error)
  })
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/courses'),
      error: error => console.log(error)
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
