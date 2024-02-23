import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import {GridComponent} from "../Utility/CustomerApp.GridComponent"
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
     CustomerComponent,GridComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
