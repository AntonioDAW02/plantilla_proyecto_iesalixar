import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductElement } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product : ProductElement | any;
  @Input() selectedIdObservable: Observable<number> | any;
  //@Input() img :string = "";

  productHovered: ProductElement | any;
  selectedId: number | any;

  constructor() { }

  ngOnInit(): void {
    if (this.selectedIdObservable) {
      this.selectedIdObservable.subscribe((id:number | any) => {
      this.selectedId = id;
      });
    }
  }

  MouseOver(product: any) {
    this.productHovered = product;
  }

}
