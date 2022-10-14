import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent921Component } from './chapter9/9.2.1/parent921/parent921.component';

const routes: Routes = [
    {path : "", component : Parent921Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
