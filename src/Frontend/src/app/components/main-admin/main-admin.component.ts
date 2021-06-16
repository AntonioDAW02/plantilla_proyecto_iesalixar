import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business/business.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent implements OnInit {

  num_users = 0;
  num_business = 0;
  num_products = 0;
  num_order = 0;

  constructor(private userService: UserService,
              private businessService: BusinessService,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data =>{
      this.num_users = data.length;
    },error =>{
      console.error(error);
    });
    
    this.businessService.getAllBusiness().subscribe(data => {
      this.num_business = data.length;
    },error =>{
      console.error(error);
    });

    this.productService.getAllProducts().subscribe(data =>{
      this.num_products = data.length;
    },error =>{
      console.error(error);
    });
  }

}
