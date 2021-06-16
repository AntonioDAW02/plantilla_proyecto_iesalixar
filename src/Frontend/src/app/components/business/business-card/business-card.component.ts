import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessElement } from 'src/app/services/business/business.service';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

  @Input() business : BusinessElement | any;
  @Input() selectedIdObservable : Observable<number> | any;

  businessHovered : BusinessElement | any;
  selectedId : number | any;

  constructor() { }

  ngOnInit(): void {
    if (this.selectedIdObservable) {
      this.selectedIdObservable.subscribe((id:number | any) => {
      this.selectedId = id;
      });
    }
  }

  MouseOver(business:any){
    this.businessHovered = business;
  }

}
