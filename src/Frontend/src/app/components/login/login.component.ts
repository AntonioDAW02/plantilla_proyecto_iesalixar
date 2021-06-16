import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //disabled: boolean = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      session: [false]
    })
  }

  ngOnInit(): void { }

  login() {
    const user = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
      session: this.loginForm.get('session')?.value,
    };

    console.log(user)

    this.userService.login(user).subscribe(user =>{
      localStorage.setItem('rol', user.role.id);
      localStorage.setItem('user', JSON.stringify(user))
      let rol_localStorage = localStorage.getItem('rol')
      console.log(rol_localStorage)

      if (rol_localStorage === "1") {
        this.router.navigate(['/admin']);
      } else if(rol_localStorage === "2"){
        this.router.navigate(['/product']);
      }else {
        this.router.navigate(['/list-product']);
      }
    }, error =>{
      if (error.status === 404) {
        this.snackBar.open("Usuario o contraseña incorrecta", "X");
      } else if(error.status === 500){
        this.snackBar.open("Usuario inexistente", "X");
      }else {
        this.snackBar.open("Error en el servidor", "X");
      }

      console.error(error)
    })
  }

}
