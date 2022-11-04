import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  subscription!: Subscription;
  isAdmin!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {
    this.subscription = this.userService
      .onToggle()
      .subscribe((value) => (this.isAdmin = value));
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.http.get<any>('http://localhost:5000/Users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          if (user.isAdmin === true) {
            alert('Login Succes, User is Admin');
            this.loginForm.reset();
            this.userService.toggleIsAdmin();
            this.router.navigate(['home-component']);
          } else {
            alert('Login Succes');
            this.loginForm.reset();
            this.router.navigate(['home-component']);
          }
        } else {
          alert('user not found');
        }
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
