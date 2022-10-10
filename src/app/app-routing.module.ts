import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent852Component } from './chapter8/8.5.2/parent852/parent852.component';

const routes: Routes = [
    {path : "", component : Parent852Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
