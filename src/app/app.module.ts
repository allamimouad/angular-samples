import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooComponent } from './chapter6/6.1/foo/foo.component';
import { Foo62Component } from './chapter6/6.2/foo62/foo62.component';
import { Foo63Component } from './chapter6/6.3/foo63/foo63.component';
import { WeatherComponent } from './chapter6/6.4/weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import { Foo65Component } from './chapter6/6.5/foo65/foo65.component';
import { ProductDeatilComponent } from './chapter6/6.6/product-deatil/product-deatil.component';
import { Home66Component } from './chapter6/6.6/home66/home66.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    Foo62Component,
    Foo63Component,
    WeatherComponent,
    Foo65Component,
    ProductDeatilComponent,
    Home66Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
