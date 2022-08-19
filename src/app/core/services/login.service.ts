import { Injectable } from "@angular/core";
import { EmailValidator } from "@angular/forms";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";

import {PeriodicElement,UserType,EmpData} from "../models/users.model"

@Injectable({
  providedIn:"root"
})
export class LoginService implements CanActivate {

  userM:string="";
  passM:string="";


  private employees:EmpData[]=[
    { code:1,fname:"tom",mname:"mdtom",lname:"ljsjd",gender:"male",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"",age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" },
    { code:2,fname:"ram",mname:"dom",lname:"ajax",gender:"female",userType:UserType.Permenant,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24"  },
    { code:2,fname:"ram",mname:"dom",lname:"ajax",gender:"female",userType:UserType.Permenant,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24"  },
    { code:3,fname:"shyam",mname:"shell",lname:"jquery",gender:"female",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24"  },
    { code:4,fname:"seeta",mname:"toor",lname:"json",gender:"male",userType:UserType.Permenant,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24"  },
    { code:5,fname:"geeta",mname:"moore",lname:"xml",gender:"female",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:""  ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" },
    { code:6,fname:"dell",mname:"pqr",lname:"lambda",gender:"male",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi" ,btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" },
    { code:7,fname:"bill",mname:"xyz",lname:"pixel",gender:"male",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi" ,btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" },

]

getEmployees():EmpData[]{
  return this.employees;
}

   private user:PeriodicElement[]=[
          { username:"admin@gmail.com",password:"admin"},
     ]
     constructor(private router: Router)
     {
      
     }

    //  test
    isLoggedIn:boolean=false;
    setStatus()
    {
      this.isLoggedIn=true;
    }
    getStatus()
    {
      return this.isLoggedIn;
    }
    //  test
    

    

   getUsers():PeriodicElement[]{
     return this.user;
   }
   private isUserLogin:boolean=false;


  
  
   setCredentials(userM:string,passM:string)
   {
    this.userM = userM;
    this.passM = passM;
    localStorage.setItem("userM",this.userM)
    localStorage.setItem("passM",this.passM)
   
   }

   authenticate()
   {
    
    if(localStorage.getItem("userM") == this.user[0].username && localStorage.getItem("passM")==this.user[0].password)
    {
     
      return true;
    }
    else 
    {
       
      return false;
    }
   }

   findRowFromService(id:any)
   {
    let temp={}
    this.employees.map(item=>{
      if(item.code==id)
      {
        temp = item;
      }
      return item
    })
    return temp;
    console.log("row printing")
   }

   

  

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // this wil only check if there's a token
    // this doesn't means that the token is valid!
    // optionally you can also validate the token on the server
    // each time this guard is invoked
    // but that ofcourse could be a lot of calls
    if (this.authenticate()) {
      console.log("vivek")
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
  

}