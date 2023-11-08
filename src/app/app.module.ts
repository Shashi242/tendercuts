import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from "@ngrx/store";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { TenderCutsComponent } from './tender-cuts/tender-cuts.component';
import { cartItemReducer } from './shared/store/counter.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CounterAppComponent,
    TenderCutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cart: cartItemReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
