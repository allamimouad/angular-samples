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
import { PriceQuoter822Component } from './chapter8/8.2.2/price-quoter822/price-quoter822.component';
import { Home822Component } from './chapter8/8.2.2/home822/home822.component';
import { HomeMediator831Component } from './chapter8/8.3.1/home-mediator831/home-mediator831.component';
import { PriceQuoter831Component } from './chapter8/8.3.1/price-quoter831/price-quoter831.component';
import { Order831Component } from './chapter8/8.3.1/order831/order831.component';
import { Home832Component } from './chapter8/8.3.2/home832/home832.component';
import { Search832Component } from './chapter8/8.3.2/search832/search832.component';
import { Amazon832Component } from './chapter8/8.3.2/amazon832/amazon832.component';
import { Ebay832Component } from './chapter8/8.3.2/ebay832/ebay832.component';
import { Parent84Component } from './chapter8/8.4/parent84/parent84.component';
import { Child84Component } from './chapter8/8.4/child84/child84.component';

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
    Home821Component,
    PriceQuoter822Component,
    Home822Component,
    HomeMediator831Component,
    PriceQuoter831Component,
    Order831Component,
    Home832Component,
    Search832Component,
    Amazon832Component,
    Ebay832Component,
    Parent84Component,
    Child84Component
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
