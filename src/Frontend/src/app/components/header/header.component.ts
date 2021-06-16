import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showButtonLogout: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')!== null) {
      this.showButtonLogout = true;
    } 
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
    this.showButtonLogout = false;
  }

}
