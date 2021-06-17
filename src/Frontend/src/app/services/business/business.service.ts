import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface BusinessElement {
  id?: number;
  name?: string;
  address?: string;
  cif?: string;
  phoneNumber?: number,
  rolBusiness?: string,
  users?: [] | null
}

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  private API_SERVER = "localhost:4200/business/";

  getAllBusiness(): Observable<any> {
    return this.http.get(this.API_SERVER + "all");
  }

  deleteBusiness(id:any): Observable<any>{
    return this.http.delete(`${this.API_SERVER + "delete/"}/${id}`, {responseType: 'text'});
  }
}
