import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { containerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { SetBackground } from './CustomDirectives/SetBackground.directive';
import { HighlightComponent } from './customDirectives/highlight/highlight.component';
import { HighlightDirective } from './customDirectives/highlight.directive';

import { AppHoverDirective } from './CustomDirectives/app-hover.directive';
import { DisableProductDirective } from './CustomDirectives/disable-product.directive';
import { ClassDirective } from './CustomDirectives/class.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    containerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    SetBackground,
    HighlightComponent,
    HighlightDirective,
    AppHoverDirective,
    DisableProductDirective,
    ClassDirective
  ],// declare the compoents
  imports: [
    BrowserModule,
    FormsModule
  ], // external module for the dependenciews
  providers: [],
  bootstrap: [AppComponent]// that will get loaded firstly
}) // Meta data object
export class AppModule { }
