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
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayout711Component } from './chapter7/7.1.1/flex-layout711/flex-layout711.component';
import { ResizeFoo712Component } from './chapter7/7.1.2/resize-foo712/resize-foo712.component';
import { OrderProcessor821Component } from './chapter8/8.2.1/order-processor821/order-processor821.component';
import { Home821Component } from './chapter8/8.2.1/home821/home821.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    Foo62Component,
    Foo63Component,
    WeatherComponent,
    Foo65Component,
    ProductDeatilComponent,
    Home66Component,
    FlexLayout711Component,
    ResizeFoo712Component,
    OrderProcessor821Component,
    Home821Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }