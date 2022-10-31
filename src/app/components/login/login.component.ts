import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
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
        },
        (err) => {
          alert('Something went wrong');
        }
      );
  }
}
