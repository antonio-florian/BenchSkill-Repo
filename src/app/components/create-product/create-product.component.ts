import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  createForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      name: [
        '',
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]*$'),
      ],
      Description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      Price: ['', Validators.required],
      Category: ['', Validators.required],
      Image_URL: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      Select: ['', Validators.required],
    });
  }
  get name() {
    return this.createForm.get('name');
  }

  get Description() {
    return this.createForm.get('Description');
  }

  get Price() {
    return this.createForm.get('Price');
  }

  get Category() {
    return this.createForm.get('Category');
  }

  get Image_URL() {
    return this.createForm.get('Image_URL');
  }

  get phoneNumber() {
    return this.createForm.get('phoneNumber');
  }

  get Select() {
    return this.createForm.get('Select');
  }

  onSubmit() {
    if (this.createForm.valid) {
      this.http
        .post<any>('http://localhost:5000/Products', this.createForm.value)
        .subscribe(
          (res) => {
            alert('Succesfuly Registered');
            this.createForm.reset();
            this.router.navigate(['product-list-component']);
          },
          (err) => {
            alert('Something went wrong');
          }
        );
    } else {
      alert('createForm not valid');
    }
  }
}
