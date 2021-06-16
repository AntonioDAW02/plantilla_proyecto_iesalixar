import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BusinessElement, BusinessService } from 'src/app/services/business/business.service';

@Component({
  selector: 'app-business-data-table',
  templateUrl: './business-data-table.component.html',
  styleUrls: ['./business-data-table.component.scss']
})
export class BusinessDataTableComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'address', 'cif', 'phone_number', 'options'];
  business: BusinessElement[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private businessService: BusinessService,
    private activateRoute: ActivatedRoute,) { }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    ngOnInit(): void {
      this.activateRoute.params.subscribe(params => {
       this.getAllUsers();
      });
    }
  
    getAllUsers(){
      this.businessService.getAllBusiness().subscribe(data=>{
        this.business = data;
        this.dataSource.data = this.business;
      }, error =>{
        console.error(error);
      });
    }
  
    deleteBusiness(business: BusinessElement) {
      this.businessService.deleteBusiness(business.id).subscribe(data => {
        if (data === true) {
          this.business.pop();
        }
      });
    }

}
