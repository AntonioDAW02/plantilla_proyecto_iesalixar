import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessListComponent } from './components/business/business-list/business-list.component';
import { LoginComponent } from './components/login/login.component';
import { MainAdminComponent } from './components/main-admin/main-admin.component';
import { BusinessDataTableComponent } from './components/management-admin/business-data-table/business-data-table.component';
import { ProductDataTableComponent } from './components/management-admin/product-data-table/product-data-table.component';
import { UserDataTableComponent } from './components/management-admin/user-data-table/user-data-table.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductComponent } from './components/product/product/product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthAdminGuard } from './guards/admin/auth-admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthDistributorGuard } from './guards/client/distributor/auth-distributor.guard';
import { AuthInstallerGuard } from './guards/client/installer/auth-installer.guard';
import { AuthManufacturerGuard } from './guards/manufacturer/auth-manufacturer.guard';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'admin', component: MainAdminComponent, canActivate: [AuthGuard, AuthManufacturerGuard, AuthInstallerGuard, AuthDistributorGuard]} ,
  {path: 'product', component: ProductComponent, canActivate: [AuthGuard, AuthAdminGuard, AuthInstallerGuard, AuthDistributorGuard]},
  { path: 'list-product', component: ProductListComponent, canActivate: [AuthGuard, AuthAdminGuard] },
  { path: 'list-business', component: BusinessListComponent, canActivate: [AuthGuard, AuthAdminGuard] },
  { path: 'user-data-table', component: UserDataTableComponent, canActivate: [AuthGuard, AuthManufacturerGuard, AuthInstallerGuard,AuthDistributorGuard] },
  { path: 'product-data-table', component: ProductDataTableComponent, canActivate: [AuthGuard, AuthManufacturerGuard, AuthInstallerGuard, AuthDistributorGuard] },
  { path: 'business-data-table', component: BusinessDataTableComponent, canActivate:  [AuthGuard, AuthManufacturerGuard, AuthInstallerGuard, AuthDistributorGuard] },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard, AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
