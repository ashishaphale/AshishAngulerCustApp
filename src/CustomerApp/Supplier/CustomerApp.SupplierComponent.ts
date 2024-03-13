import { Component,Injector } from '@angular/core';
import {Supplier} from "./CustomerApp.SuppModel"
import {BaseLogger} from "../Utility/CustomerApp.Logger"
import {HttpClient, HttpHeaders} from "@angular/common/http"
@Component({
  templateUrl: './CustomerApp.SupplierView.html'
})
export  class SupplierComponent {
  title = 'AshCustomerApplication';
  SupplierModel : Supplier = new Supplier();
  SupplierModels :Array<Supplier> = new Array<Supplier>();
  Logobj : BaseLogger = null;
  Disable:boolean = false;
  constructor(_injector:Injector,public httpc:HttpClient){
    this.Logobj = _injector.get("1");
    this.Logobj.Log();
  }

  PosttoServer(){
    //http://localhost:3000/Customers
    // create a light weight DTO Data transfer object
    this.Disable = true;
    var suppdto:any = {};
    suppdto.SupplierCode = this.SupplierModel.SupplierCode;
    suppdto.SupplierName = this.SupplierModel.SupplierName;
    suppdto.SupplierAmount = this.SupplierModel.SupplierAmount;
    this.httpc.post("http://localhost:3000/Suppliers",
    suppdto)
        .subscribe({
          next: this.Success.bind(this),
          error: this.Error.bind(this)
       });
  }

  GetFromServer(){
    
    this.httpc.get("http://localhost:3000/Suppliers").
    subscribe(res=>this.SuccessGet(res),res=>this.Error(res));
  }

  Error(res) {
    console.debug(res);
  }
  Success(res) {
   this.GetFromServer();
  }
  SuccessGet(res) {
    this.SupplierModels = res;
    this.Disable = false;
    this.SupplierModel = new Supplier();
  }
  SelectSupplier(_selected:any){
    //this.CustomerModel = _selected;
    this.SupplierModel.SupplierCode = _selected.SupplierCode;
    this.SupplierModel.SupplierName = _selected.SupplierName;
    this.SupplierModel.SupplierAmount = _selected.SupplierAmount;
    //this.CustomerModel.formCustomerGroup = new FormGroup<any>(_selected);
  }
  Add(){
    this.SupplierModels.push(this.SupplierModel);
    this.SupplierModel = new Supplier();// clear UI
  }
  hasError(typeofvalidator:string,
    controlname:string) : boolean{
      return this.SupplierModel
            .formSupplierGroup
            .controls[controlname]
            .hasError(typeofvalidator);
  }
}

