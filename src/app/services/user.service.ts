import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isAdmin: boolean = false;
  private subject = new Subject<any>();
  url = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  toggleIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
    this.subject.next(this.isAdmin);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  getProducts(): Observable<any> {
    return this.http.get(this.url + '/Products');
  }
}
