import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAdminComponent } from './components/main-admin/main-admin.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from "./material-module/material-module.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { CardComponent } from './components/card/card.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product/product.component';
import { InsertProductComponent } from './components/product/insert-product/insert-product.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserDataTableComponent } from './components/management-admin/user-data-table/user-data-table.component';
import { ProductDataTableComponent } from './components/management-admin/product-data-table/product-data-table.component';
import { BusinessDataTableComponent } from './components/management-admin/business-data-table/business-data-table.component';
import { BusinessListComponent } from './components/business/business-list/business-list.component';
import { BusinessCardComponent } from './components/business/business-card/business-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MainAdminComponent,
    LoginComponent,
    RegisterComponent,
    CardComponent,
    ProductComponent,
    InsertProductComponent,
    HeaderComponent,
    ProductListComponent,
    ProductCardComponent,
    ProfileComponent,
    UserDataTableComponent,
    ProductDataTableComponent,
    BusinessDataTableComponent,
    BusinessListComponent,
    BusinessCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
