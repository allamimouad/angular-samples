import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home822Component } from './chapter8/8.2.2/home822/home822.component';

const routes: Routes = [
    {path : "", component : Home822Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
