import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home66Component } from './chapter6/6.6/home66/home66.component';
import { ProductDeatilComponent } from './chapter6/6.6/product-deatil/product-deatil.component';

const routes: Routes = [
    {path : "", component : Home66Component ,
        children : [
            {path : "productDetail/:id", component : ProductDeatilComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
