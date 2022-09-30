import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeMediator831Component } from './chapter8/8.3.1/home-mediator831/home-mediator831.component';

const routes: Routes = [
    {path : "", component : HomeMediator831Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
