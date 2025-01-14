import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CustomAppRoutingModule } from './custom-app-routing.module';
import { HomeComponent } from './custom-app/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CustomAppRoutingModule
  ],
  bootstrap: [HomeComponent], // Bootstrap HomeComponent directly
})
export class CustomAppModule { }
