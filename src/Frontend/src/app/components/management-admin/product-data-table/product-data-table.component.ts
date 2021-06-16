import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CategoryElement, CategoryService } from 'src/app/services/category/category.service';
import { ProductElement, ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-data-table',
  templateUrl: './product-data-table.component.html',
  styleUrls: ['./product-data-table.component.scss']
})
export class ProductDataTableComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'homologation', 'description', 'category', 'options'];
  products: ProductElement[] = [];
  categories: CategoryElement[] = [];
  loadCategories: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private activateRoute: ActivatedRoute) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.getAllproduct();
    });

    this.getAllCategories();
  }

  getAllproduct() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.dataSource.data = this.products;
    }, error => {
      console.error(error);
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe(async data => {
      this.loadCategories = true;
      this.categories = await data;
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

}
