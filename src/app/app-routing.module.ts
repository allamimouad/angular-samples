import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Amazon832Component } from './chapter8/8.3.2/amazon832/amazon832.component';
import { Ebay832Component } from './chapter8/8.3.2/ebay832/ebay832.component';
import { Home832Component } from './chapter8/8.3.2/home832/home832.component';

const routes: Routes = [
    {path : "", component : Home832Component, children: [
      {path : "", component : Ebay832Component},
      {path : "amazon", component : Amazon832Component}
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
