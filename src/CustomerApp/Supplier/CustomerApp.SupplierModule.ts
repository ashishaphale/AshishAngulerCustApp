import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import {GridModule} from "../Utility/CustomerApp.GridModule"
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
      SupplierComponent
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule,FormsModule,ReactiveFormsModule, GridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
