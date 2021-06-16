import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

export interface UserElement {
  id?: any;
  dni?: string;
  name?: string;
  surname?: string;
  username?: string;
  password?: string;
  phone_number?: number;
  email?: string;
  city?: any;
  rol?: string;
  business?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private API_SERVER = "https://buy-medium-voltage-backend.herokuapp.com/user/";

  login(user: any): Observable<any> {
    return this.http.post(this.API_SERVER + "login",user);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.API_SERVER + "register", user);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.API_SERVER + "users");
  }

  getUserById(id: any):Observable<any>{
    return this.http.get(this.API_SERVER + "user/", id);
  }

  getUserByUsername(username: any):Observable<any>{
    return this.http.get(`${this.API_SERVER + "username/"}/${username}`, {responseType: 'text'})
  }

  getRolByUsername(username: any):Observable<any>{
    return this.http.get(`${this.API_SERVER + "rol/"}/${username}`, {responseType: 'text'})
  }

  updateUser(id: number, value: any): Observable<any>{
    return this.http.put(`${this.API_SERVER+ "edituser/"}${id}`, value);
  }

  deleteUser(id:any): Observable<any>{
    return this.http.delete(`${this.API_SERVER + "user/"}/${id}`, {responseType: 'text'});
  }
}