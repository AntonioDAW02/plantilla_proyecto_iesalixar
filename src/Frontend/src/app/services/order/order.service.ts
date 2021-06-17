import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface OrderElement {
  id?: number,
  state?: string,
  order_date?: string,
  delivery_date?:string,
  model_year?:string,
  price?:number,
  invoice?: [],
  product?: []
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  private API_SERVER = "localhost:4200/order/";

  getAllOrders(): Observable<any>{
    return this.http.get(this.API_SERVER + "orders");
  }
}
