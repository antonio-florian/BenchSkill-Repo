import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name!: any;
  Email!: any;
  Price!: any;
  Category!: any;
  ImageURL!: any;
  PhoneNumber!: any;
  select!: any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const updateProduct = {
      name: this.name,
      Email: this.Email,
      Price: this.Price,
      Category: this.Category,
      ImageURL: this.ImageURL,
      PhoneNumber: this.PhoneNumber,
      select: this.select,
    };
  }
}
