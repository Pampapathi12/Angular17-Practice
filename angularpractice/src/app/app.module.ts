import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],// declare the compoents
  imports: [
    BrowserModule
  ], // external module for the dependenciews
  providers: [],
  bootstrap: [AppComponent]// that will get loaded firstly
}) // Meta data object
export class AppModule { }
