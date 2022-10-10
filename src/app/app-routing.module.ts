import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent84Component } from './chapter8/8.4/parent84/parent84.component';

const routes: Routes = [
    {path : "", component : Parent84Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
