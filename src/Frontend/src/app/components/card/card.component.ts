import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() img ="";
  @Input() num_users = 0;
  @Input() num_business = 0;
  @Input() num_products = 0;
  @Input() num_order = 0;
  @Input() text ="";

  ngOnInit(): void {
  }

}
