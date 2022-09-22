import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Product {
    id: number;
    description: string;
}

@Component({
  selector: 'app-home66',
  template: `
    <p>
      home66 works!
    </p>

    <ul style="width: 100px;">
        <li *ngFor="let product of products"
            [class.selected]="product === selectedProduct"
            (click) = onSelect(product)>

            <span>{{product.id}} {{product.description}} </span>

        </li>
    </ul>

    <router-outlet></router-outlet>

  `,
  styles: [
    `.selected {background-color: cornflowerblue}`
  ]
})
export class Home66Component implements OnInit {

    selectedProduct!: Product;
    products: Product[] = [
                            {id: 1, description: "iPhone 7"},
                            {id: 2, description: "Samsung 7"},
                            {id: 3, description: "MS Lumina"}
                        ];

    constructor(private _router: Router) {}
    
    onSelect(prod: Product): void {

        this.selectedProduct = prod;
        this._router.navigate(["/productDetail", prod.id]);

    }

  ngOnInit(): void {
  }

}
