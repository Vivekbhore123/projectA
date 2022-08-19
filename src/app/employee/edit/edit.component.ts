import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './dialogelement/dialogelement';
import { ActivatedRoute } from '@angular/router';
import { EmployeeComponent } from '../employee.component';
import { LoginService } from 'src/app/core/services/login.service';
import {EmployeeService} from "../../core/services/empService/emp.service"


// import {Gender} from "../../core/models/users.model";


interface City {
  value: string;
  viewValue: string;
}

interface State {
  id:number,
  value: string;
  viewValue: string;
  cities:City[];
}


interface Country {
  id:number,
  value: string;
  viewValue: string;
  states:State[];
}



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[DialogElementsExampleDialog,EmployeeComponent,LoginService,EmployeeService]
})
export class EditComponent implements OnInit {

 

  fname:string = "";
  mname:string = "";
  lname:string = "";
  age:number=0;
  gender:string = "";
  
   country:String = "";
   pin:Number = 0;
   state:String="";
   dob:String="";
   city:String="";
   address1:String="";
   address2:String="";
   


 

   openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }


  EmployeeId:string|null='';

  constructor(private _route:ActivatedRoute,private obj:EmployeeComponent,public dialog: MatDialog,public serviceobj:LoginService,private empservice:EmployeeService){

  }
  dataTofill:any={};
  ngOnInit(): void {
    
    this.EmployeeId= this._route.snapshot.paramMap.get('code'); 
    console.log("testing",this.EmployeeId)
      
    //befor using http
    // this.dataTofill =  this.serviceobj.findRowFromService(this.EmployeeId); 

    //with http call
    this.dataTofill =  this.empservice.findRowFromService(this.EmployeeId); 
    

    console.log(this.dataTofill)
  }

  
  
fullName:string="";
// email:string="";


savePerson(form:NgForm){
  console.log(form);
  console.log("**************");
  console.log(typeof form.value.gender);

}



genders:any[]=[
  {viewValue:-1,Text:"Select Gender"},
  {viewValue:1,Text:"male"},
  {viewValue:2,Text:"female"} 
];


countryArray: Country[] = [
  {id:0,value: 'India', viewValue: 'India',states:[
    {id:0,value: 'Maharashtra', viewValue: 'Maharashtra',
    cities:[
      {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Nagpur', viewValue: 'Nagpur'}
    ]},
  {id:1,value: 'Bihar', viewValue: 'Bihar',
  cities:[
    {value: 'b1', viewValue: 'b1'},
  {value: 'b2', viewValue: 'b2'},
  {value: 'b3', viewValue: 'b3'}
  ]
},
  {id:2,value: 'Karnataka', viewValue: 'Karnataka',
  cities:[
    {value: 'k1', viewValue: 'k1'},
  {value: 'k2', viewValue: 'k2'},
  {value: 'k3', viewValue: 'k3'}
  ]
}
  ]},
 
];

countryIndex:number=0;
stateIndex:number=0;

detectCountryChange(country:any)
{
console.log(country);
console.log((country.target as HTMLInputElement).innerText);
this.country = (country.target as HTMLInputElement).innerText;
for(let i=0;i<this.countryArray.length;i++)
{
  if(this.countryArray[i].value==this.country)
  {
    this.countryIndex = this.countryArray[i].id;
    console.log(this.countryArray[this.countryIndex].states)
  }
}
}


detectStateChange(state:any)
{
console.log(state);
console.log((state.target as HTMLInputElement).innerText);
this.state = (state.target as HTMLInputElement).innerText;
for(let i=0;i<this.countryArray[this.countryIndex].states.length;i++)
{
  if(this.countryArray[this.countryIndex].states[i].value==this.state)
  {
    this.stateIndex = this.countryArray[this.countryIndex].states[i].id;
    // console.log(this.countryArray[this.countryIndex].states)
  }
}
}

doProcess(){
  console.log(this.countryArray);
  console.log(this.countryArray[0].states);
  this.openDialog();
}



}
