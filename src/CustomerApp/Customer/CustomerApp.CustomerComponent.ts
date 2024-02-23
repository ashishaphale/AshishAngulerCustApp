import { Component,Injector } from '@angular/core';
import {Customer} from "./CustomerApp.model"
import {BaseLogger} from "../Utility/CustomerApp.Logger"
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'AshCustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>();
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
    var custdto:any = {};
    custdto.CustomerCode = this.CustomerModel.CustomerCode;
    custdto.CustomerName = this.CustomerModel.CustomerName;
    custdto.CustomerAmount = this.CustomerModel.CustomerAmount;
    this.httpc.post("http://localhost:3000/Customers",
        custdto)
        .subscribe({
          next: this.Success.bind(this),
          error: this.Error.bind(this)
       });
  }
  GetFromServer(){
    
    this.httpc.get("http://localhost:3000/Customers").
    subscribe(res=>this.SuccessGet(res),res=>this.Error(res));
  }
  Error(res) {
    console.debug(res);
  }
  Success(res) {
   this.GetFromServer();
  }
  SuccessGet(res) {
    this.CustomerModels = res;
    this.Disable = false;
    this.CustomerModel = new Customer();
  }
  SelectCustomer(_selected:any){
    //this.CustomerModel = _selected;
    this.CustomerModel.CustomerCode = _selected.CustomerCode;
    this.CustomerModel.CustomerName = _selected.CustomerName;
    this.CustomerModel.CustomerAmount = _selected.CustomerAmount;
    //this.CustomerModel.formCustomerGroup = new FormGroup<any>(_selected);
  }
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();// clear UI
  }
  hasError(typeofvalidator:string,
    controlname:string) : boolean{
      return this.CustomerModel
            .formCustomerGroup
            .controls[controlname]
            .hasError(typeofvalidator);
  }
}
