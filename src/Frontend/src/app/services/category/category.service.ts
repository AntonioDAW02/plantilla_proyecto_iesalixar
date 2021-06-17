import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CategoryElement {
  id?: number,
  name?: string,
  product?:[] | null
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private API_SERVER = "localhost:4200/category/";

  getAllCategories(): Observable<any>{
    return this.http.get(this.API_SERVER + "categories");
  }
}
