import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../_models/token';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl + 'auth/anonymous?platform=subscriptions';
  private currentTokenSource = new BehaviorSubject<Token | null>(null);
  currentToken$ = this.currentTokenSource.asObservable();
  
  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.get<Token>(this.baseUrl).pipe(
      map((response: Token) => {
        const token = response;
        if(token) {
          localStorage.setItem('token', JSON.stringify(token));
          this.currentTokenSource.next(token);
        }
      })
    );
  }

  setCurrentToken(token: Token) {
    this.currentTokenSource.next(token);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentTokenSource.next(null);
  }
}
