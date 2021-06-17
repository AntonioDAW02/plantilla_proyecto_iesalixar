import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductElement {
  id?: number,
  name?: string,
  homologation?: string,
  description?: string,
  price?: number,
  urlImg?: string,
  category?: string | null,
  order?: string | null,
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private API_SERVER = "localhost:4200/product/";

  register(product: any): Observable<any> {
    return this.http.post(this.API_SERVER + "new", product);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.API_SERVER + "products");
  }

  getProductById(id: any):Observable<any>{
    return this.http.get(this.API_SERVER + "byid/", id);
  }

  getProductByName(username: any):Observable<any>{
    return this.http.get(this.API_SERVER + "byname/", username);
  }

  updateProduct(id: number, value: any): Observable<any>{
    return this.http.put(`${this.API_SERVER+ "product/"}${id}`, value);
  }

  deleteProduct(id:any): Observable<any>{
    return this.http.delete(`${this.API_SERVER + "delete/"}/${id}`, {responseType: 'text'});
  }
}
