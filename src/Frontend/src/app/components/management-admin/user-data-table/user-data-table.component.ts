import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BusinessElement, BusinessService } from 'src/app/services/business/business.service';
import { RolElement, RolService } from 'src/app/services/rol/rol.service';
import { UserElement, UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrls: ['./user-data-table.component.scss']
})
export class UserDataTableComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'dni', 'name', 'surname', 'username', 'phone_number', 'email', 'city', 'rol', 'business', 'options'];
  users: UserElement[] = [];
  roles: RolElement[] = [];
  business: BusinessElement[] = [];
  loadRoles:boolean = false;
  loadBusiness:boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService,
        private rolService: RolService,
        private businessService: BusinessService,
        private activateRoute: ActivatedRoute,) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.getAllUsers();
    });

    this.getAllRoles();
    this.getAllBusiness();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      this.dataSource.data = this.users;
    }, error => {
      console.error(error);
    });
  }

  getAllRoles(){
    this.rolService.getAllRoles().subscribe(async roles =>{
      this.loadRoles = true;
      this.roles = await roles;
    }, error => {
      console.error(error);
    });
  }

  getAllBusiness(){
    this.businessService.getAllBusiness().subscribe(async business =>{
      this.loadBusiness = true;
      this.business = await business;
    }, error => {
      console.error(error)
    });
  }

  deleteUser(user: UserElement) {
    this.userService.deleteUser(user.id).subscribe(data => {
      if (data === true) {
        this.users.pop();
      }
    });
  }

  getUserRol(id: number) {
    let element_name: any;
    if (this.loadRoles) {
      this.roles.forEach(element => {
        if (element.id === id) {
          element_name = element.name;
        }
      });
    }
    return element_name;
  }

  getUserBusiness(id: number){
    let element_name: any;
    if (this.loadBusiness) {
      console.log(this.loadBusiness)
      this.business.forEach(element =>{
        if (element.id === id) {
          element_name = element.name;
        }
      });
    }
    return element_name;
  }

}
