import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../module/user";
// Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:3000/users', user);
  }
}
