import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home821Component } from './chapter8/8.2.1/home821/home821.component';

const routes: Routes = [
    {path : "", component : Home821Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
