import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import {GridModule} from "../Utility/CustomerApp.GridModule"
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
     CustomerComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,FormsModule,ReactiveFormsModule,GridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
