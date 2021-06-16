import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryElement, CategoryService } from 'src/app/services/category/category.service';
import { ProductElement, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.scss']
})
export class InsertProductComponent implements OnInit {

  registerProduct: FormGroup;
  categories: CategoryElement[] = [];
  product: ProductElement | any;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    private productService: ProductService,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public dataDialog: any) {

    this.registerProduct = this.fb.group({
      name: ['', Validators.required],
      homologation: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      urlImg: ['', Validators.required],
      category: ['', Validators.required],
      order: null,
    });
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;

      if (this.dataDialog != null) {
        this.registerProduct.get('name')?.setValue(this.dataDialog.name);
        this.registerProduct.get('homologation')?.setValue(this.dataDialog.homologation);
        this.registerProduct.get('description')?.setValue(this.dataDialog.description);
        this.registerProduct.get('price')?.setValue(this.dataDialog.price);
        this.registerProduct.get('urlImg')?.setValue(this.dataDialog.urlImg);

        for (let i = 0; i < this.categories.length; i++) {
          if (this.categories[i].id == this.dataDialog.category) {
            this.registerProduct.get('category')?.setValue(this.categories[i].name);
            break;
          }
          if (this.categories[i].name == this.dataDialog) {
            this.registerProduct.get('category')?.setValue(this.dataDialog);
            break;
          }
        }
      }
    });
  }

  saveProduct() {
    if (this.registerProduct.valid) {
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].name == this.registerProduct.get('category')?.value) {
          this.registerProduct.get('category')?.setValue(this.categories[i].id);
          break;
        }
      }

      const register: ProductElement = {
        name: this.registerProduct.get('name')?.value,
        homologation: this.registerProduct.get('homologation')?.value,
        description: this.registerProduct.get('description')?.value,
        price: this.registerProduct.get('price')?.value,
        urlImg: this.registerProduct.get('urlImg')?.value,
        category: this.registerProduct.get('category')?.value,
        order: null
      }

      if (this.dataDialog != null) {
        register.id = this.dataDialog.id;
        this.productService.updateProduct(this.dataDialog.id, register).subscribe(data => {
          this.dialogRef.close("cerrado");
        }, error => {
          console.error(error);
        });
      } else {
        this.productService.register(register).subscribe(data => {
          this.dialogRef.close("cerrado");
        }, error => {
          console.error(error);
        });
      }

    }
  }

}
