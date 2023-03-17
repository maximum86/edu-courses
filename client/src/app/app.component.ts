import { HttpClient } from '@angular/common/http';
import { Token } from '../app/_models/token';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Edu app';
  courses: any; 

  constructor(private http: HttpClient, private accountService: AccountService) {}

  ngOnInit(): void {
    this.getCourses();
    this.setCurrentToken();
  }

  getCourses() {
    // this.http.get('http://api.wisey.app/api/v1/core/preview-courses').subscribe({    
    //   next: response => this.courses = response,
    //   error: error => console.log(error),
    //   complete: () => console.log('Request has completed')
    // });
  }

  setCurrentToken() {
    const tokenString = localStorage.getItem('token');
    if (!tokenString) return;
    const token: Token = JSON.parse(tokenString);
    this.accountService.setCurrentToken(token);
  }
}
