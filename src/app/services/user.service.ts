import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isAdmin: boolean = true;
  private subject = new Subject<any>();

  constructor() {}

  toggleIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
    this.subject.next(this.isAdmin);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
