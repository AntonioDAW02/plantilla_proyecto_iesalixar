import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/services/business/business.service';
import { RolService } from 'src/app/services/rol/rol.service';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  disabled: boolean = false;
  registerForm: FormGroup;
  rol:any;
  business:any;

  constructor(private fb: FormBuilder, 
              private userService: UserService,
              private rolService: RolService,
              private router: Router,
              private businessService: BusinessService,) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}[A-Za-z]{1}$')]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      password: ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(14),
      Validators.pattern(/[A-Z]/),
      Validators.pattern(/[a-z]/),
      Validators.pattern(/[!"·$%&/()=?¿'¡]/)
      ]],
      phone_number: ['', [Validators.required, Validators.pattern("[0-9 ]{9}")]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      rol: ['', Validators.required],
      business: ['', Validators.required]
    });
  }

  ngOnInit(): void { 
    this.rolService.getAllRoles().subscribe(data =>{
      this.rol = data;
    },error =>{
      console.error(error);
    });

    this.businessService.getAllBusiness().subscribe(data =>{
      this.business = data;
    }, error =>{
      console.error(error);
    });
  }

  register() {
    const user = {
      name: this.registerForm.get('name')?.value,
      surname: this.registerForm.get('surname')?.value,
      dni: this.registerForm.get('dni')?.value,
      username: this.registerForm.get('username')?.value,
      password: this.registerForm.get('password')?.value,
      phone_number: this.registerForm.get('phone_number')?.value,
      email: this.registerForm.get('email')?.value,
      city: this.registerForm.get('city')?.value,
      role: this.registerForm.get('rol')?.value,
      business: this.registerForm.get('business')?.value,
      session: this.registerForm.get('session')?.value,
      
    };
    
    this.disabled = true;
    this.userService.register(user).subscribe(data => {
      this.router.navigate(['']);
    }, error => {
      console.log(error);
    });

  }

}
