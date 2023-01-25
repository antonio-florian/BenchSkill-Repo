import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(private userProducts: UserService) {}

  ngOnInit(): void {
    this.userProducts.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
