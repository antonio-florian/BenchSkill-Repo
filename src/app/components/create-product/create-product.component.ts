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
      productName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      Description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      Price: [
        '',
        [
          Validators.required,
          Validators.pattern('^[1-9]d{0,7}(?:.d{1,4})?|.d{1,4}$'),
        ],
      ],
      Category: ['', [Validators.required]],
      Image_URL: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^https?://(?:[a-z0-9-]+.)+[a-z]{2,6}(?:/[^/#?]+)+.(?:jpg|gif|png)$'
          ),
        ],
      ],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      Select: ['', [Validators.required]],
    });
  }

  get productName() {
    return this.createForm.get('productName');
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
            alert('Succesfuly Created product');
            this.createForm.reset();
            this.router.navigate(['product-list-component']);
          },
          (err) => {
            alert('Something went wrong');
          }
        );
    } else {
      console.log(this.createForm);
      alert('Form not valid');
    }
  }
}
