import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CustomAppRoutingModule } from './custom-app-routing.module';
import { HomeComponent } from './custom-app/home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { TestComponent } from './test/test.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { SampleDirective } from './CustomDirective1/sample.directive';
import { Class1Directive } from './CustomDirective1/class1.directive';
import { StyleDirective } from './CustomDirective1/style.directive';
import { IfDirective } from './CustomDirective1/if.directive';


@NgModule({
  declarations: [
    HomeComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    DemoComponent,
    Demo1Component,
    SampleDirective,
    Class1Directive,
    StyleDirective,
    IfDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CustomAppRoutingModule
  ],
  bootstrap: [HomeComponent], // Bootstrap HomeComponent directly
})
export class CustomAppModule { }
