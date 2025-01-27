import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { AdminComponent } from './header1/admin/admin.component';
import { Home1Component } from './header1/home1/home1.component';
import { Sidebar1Component } from './header1/home1/sidebar1/sidebar1.component';
import { Hero1Component } from './header1/home1/hero1/hero1.component';
import { SubscribeService } from './Serive/subscribe.service';
import { UserListComponent } from './header1/admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './Serive/user.service';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    AdminComponent,
    Home1Component,
    Sidebar1Component,
    Hero1Component,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SubscribeService, UserService], // same instace will available in the modulw level
  bootstrap: [AppComponent]
})
export class AppModule { }
