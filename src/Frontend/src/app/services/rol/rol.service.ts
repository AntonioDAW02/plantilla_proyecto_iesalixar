import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RolElement {
  id?: number;
  name?: string;
  description?: string;
  users?: string;
  business?: string,
}

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  private API_SERVER = "localhost:4200/rol/";

  getAllRoles(): Observable<any> {
    return this.http.get(this.API_SERVER + "roles");
  }
}
