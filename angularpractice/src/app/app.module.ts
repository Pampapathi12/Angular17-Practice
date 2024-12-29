import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],// declare the compoents
  imports: [
    BrowserModule
  ], // external module for the dependenciews
  providers: [],
  bootstrap: [AppComponent]// that will get loaded firstly
}) // Meta data object
export class AppModule { }
