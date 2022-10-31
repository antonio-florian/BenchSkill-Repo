import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      familyName: [''],
      number: [''],
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.http
      .post<any>('http://localhost:5000/Users', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('Succesfuly Registerd');
          this.signupForm.reset();
          this.router.navigate(['login-component']);
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
}
