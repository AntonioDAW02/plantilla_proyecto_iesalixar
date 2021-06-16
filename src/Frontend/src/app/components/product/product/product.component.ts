import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryElement } from 'src/app/services/category/category.service';
import { OrderElement } from 'src/app/services/order/order.service';
import { ProductElement, ProductService } from 'src/app/services/product/product.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InsertProductComponent } from '../insert-product/insert-product.component';
import { CategoryService } from 'src/app/services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'homologation', 'description', 'price', 'category', 'options'];
  categories: CategoryElement[] = [];
  products: ProductElement[] = [];
  dataLengthHalf = 0;
  dataLength = 0;
  loadCategories: boolean = false;
  loadProducts: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private activateRoute: ActivatedRoute,
    private route: Router,
    public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.getAllproduct();
    });

    this.getAllCategories();

    this.dataLength = this.dataSource.data.length;
    this.dataLengthHalf = Math.round(this.dataSource.data.length / 2);

  }


  getAllproduct() {
    this.productService.getAllProducts().subscribe(async data => {
      this.loadProducts = true;
      this.products = await data;
      this.dataSource.data = this.products;
      console.log(this.products)
    }, error => {
      console.error(error);
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(async data => {
      this.loadCategories = true;
      this.categories = await data;
      console.log(this.categories)
    }, error => {
      console.error(error);
    });
  }

  deleteProduct(product: ProductElement) {
    this.productService.deleteProduct(product.id).subscribe(data => {
      if (data === true) {
        this.products.pop();
      }
    });
  }

  updateProduct(product: ProductElement) {
    this.dataSource.data.forEach(data => {
      if (data.id == product.id) {
        const dialogRef = this.dialog.open(InsertProductComponent, { data: data });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result)
          if (result != undefined) {
            this.getAllproduct();
          }
        });
      }
    })
  }

  getCategoryName(id: number) {
    let element_name: any;
    if (this.loadCategories) {
      this.categories.forEach(element => {
        if (element.id === id) {
          element_name = element.name
        }
      });
    }
    return element_name;
  }

  openDialog() {
    this.dialog.open(InsertProductComponent, {});
  }

}
