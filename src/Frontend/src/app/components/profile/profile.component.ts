import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserElement, UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  local_storage_user = JSON.parse(localStorage.getItem('user') || '{}');
    
    ls_user_id = this.local_storage_user.id;
    ls_user_name = this.local_storage_user.name;
    ls_user_surname = this.local_storage_user.surname;
    ls_user_username = this.local_storage_user.username;
    ls_user_dni = this.local_storage_user.dni;
    ls_user_phone_number = this.local_storage_user.phone_number;
    ls_user_email = this.local_storage_user.email;
    ls_user_city = this.local_storage_user.city;
    ls_user_rol_name = this.local_storage_user.rol.name;
    ls_user_business_name = this.local_storage_user.business.name;
    ls_user_business_address = this.local_storage_user.business.address;
    ls_user_business_cif = this.local_storage_user.business.cif;
    ls_user_business_phone = this.local_storage_user.business.phone_number;

    editPersonalData: FormGroup;
    personalData: FormGroup;
    businessData: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
    this.personalData = this.fb.group({
      name: [this.ls_user_name, Validators.required],
      phone_number: [this.ls_user_phone_number, Validators.required],
      surname: [this.ls_user_surname, Validators.required],
      email: [this.ls_user_email, Validators.required],
      username: [this.ls_user_username, Validators.required],
      city: [this.ls_user_city, Validators.required],
      dni: [this.ls_user_dni, Validators.required],
      rol: [this.ls_user_rol_name]
    });

    this.businessData = this.fb.group({
      nameBusiness: [this.ls_user_business_name, Validators.required],
      addressBusiness: [this.ls_user_business_address, Validators.required],
      cifBusiness: [this.ls_user_business_cif, Validators.required],
      phoneBusiness: [this.ls_user_business_phone, Validators.required]
    });

    this.editPersonalData = this.fb.group({
      personalData : this.personalData,
      businessData: this.businessData
    });
  }

  ngOnInit(): void { }

  updateUser(){
    const updateUser: UserElement = {
      name: this.personalData.get('name')?.value,
      phone_number: this.personalData.get('phone_number')?.value,
      surname: this.personalData.get('surname')?.value,
      email: this.personalData.get('email')?.value,
      username: this.personalData.get('username')?.value,
      city: this.personalData.get('city')?.value,
      dni: this.personalData.get('dni')?.value,
    }

    this.userService.updateUser(this.ls_user_id,updateUser).subscribe( updateUser => {
      window.location.reload;
    }, error => {
      console.error(error);
    });

    //console.log(updateUser)
  }

}
