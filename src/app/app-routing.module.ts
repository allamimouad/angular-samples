import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResizeFoo712Component } from './chapter7/7.1.2/resize-foo712/resize-foo712.component';

const routes: Routes = [
    {path : "", component : ResizeFoo712Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
