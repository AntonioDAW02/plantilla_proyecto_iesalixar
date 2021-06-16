import { Component, OnInit } from '@angular/core';
import { BusinessElement, BusinessService } from 'src/app/services/business/business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {

  businessList: BusinessElement[] = [];

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.getAllBusiness();
  }

  getAllBusiness(){
    this.businessService.getAllBusiness().subscribe(business =>{
      this.businessList = business;
    }, error =>{
      console.error(error);
    });
  }

}
