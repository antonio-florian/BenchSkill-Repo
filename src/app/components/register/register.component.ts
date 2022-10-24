import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name!: any;
  familyName!: any;
  number!: any;
  email!: any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const updateProduct = {
      name: this.name,
      familyName: this.familyName,
      number: this.number,
      email: this.email,
    };
  }
}
