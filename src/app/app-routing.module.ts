import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent85Component } from './chapter8/8.5/parent85/parent85.component';

const routes: Routes = [
    {path : "", component : Parent85Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
