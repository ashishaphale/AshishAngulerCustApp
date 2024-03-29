import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import {FormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { MasterPageComponent } from './CustomerApp.MasterPageComponent'
import { HomeComponent } from './CustomerApp.HomeComponent'
import {MainRoutes} from "../Routing/CustomerApp.MainRouting"
import { DbLogger, BaseLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';

var providerscoll:any = [];
// http call get this from the server
providerscoll.push({ provide: "1", useClass: DbLogger });
providerscoll.push({ provide: "2", useClass: ConsoleLogger });
providerscoll.push({ provide: BaseLogger, useClass: ConsoleLogger });

@NgModule({
  declarations: [
     MasterPageComponent
      , HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [providerscoll],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }