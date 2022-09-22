import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-product-deatil',
  template: `
    <p>
      product-deatil works!
    </p>
    <h3 class="product">Details for product id {{productId}}</h3>
  `,
  styles: [
  ]
})
export class ProductDeatilComponent implements OnInit {

    productId! : string | null;

    constructor(private activatedRoute : ActivatedRoute) { 

        this.activatedRoute.paramMap
                    .subscribe(params => this.productId = params.get('id'));
        
    }

    ngOnInit(): void {
    }

}
