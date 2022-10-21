import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  name!: any;
  Description!: any;
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
      Description: this.Description,
      Price: this.Price,
      Category: this.Category,
      ImageURL: this.ImageURL,
      PhoneNumber: this.PhoneNumber,
      select: this.select,
    };
  }
}
