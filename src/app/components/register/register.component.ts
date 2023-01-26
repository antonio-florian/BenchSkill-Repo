import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      familyName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      number: [
        '',
        [Validators.required, Validators.pattern('[0-9]{3} [0-9]{3} [0-9]{3}')],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
        ],
      ],
      isAdmin: false,
    });
  }

  get name() {
    return this.signupForm.get('name');
  }

  get familyName() {
    return this.signupForm.get('familyName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get number() {
    return this.signupForm.get('number');
  }

  get password() {
    return this.signupForm.get('password');
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.http
        .post<any>('http://localhost:5000/Users', this.signupForm.value)
        .subscribe(
          (res) => {
            alert('Succesfuly Registered');
            this.signupForm.reset();
            this.router.navigate(['login-component']);
          },
          (err) => {
            alert('Something went wrong');
          }
        );
    } else {
      console.log(this.signupForm);
      alert('signupForm not valid');
    }
  }
}
