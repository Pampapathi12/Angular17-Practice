import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { AdminComponent } from './header1/admin/admin.component';
import { Home1Component } from './header1/home1/home1.component';
import { Sidebar1Component } from './header1/home1/sidebar1/sidebar1.component';
import { Hero1Component } from './header1/home1/hero1/hero1.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    AdminComponent,
    Home1Component,
    Sidebar1Component,
    Hero1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
