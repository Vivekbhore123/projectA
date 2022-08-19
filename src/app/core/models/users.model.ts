
export interface PeriodicElement {
   username:string;
   password:string;
  }


  export enum UserType {
   Contractual="contractual",
   Permenant = "permenant"
  }

  // export enum Gender {
  //   Male = "male",
  //   Female = "female"
  //  }

export interface EmpData {
    code:number;
    fname: string;
    mname: string;
    lname: string;
    salary: number;
    pin: number;
    address1: string;
    address2: string;
    userType:UserType;
    gender:string; 
    btns:string;
    age:number;
    country:string;
    state:string;
    city:string;
    dob:string;
  }
  