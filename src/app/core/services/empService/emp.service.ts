import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core'
import { Observable } from 'rxjs'; 
import { EmpData } from '../../models/users.model'

//If we want to use the data accross multiple components and the logic then we 
// need to provide that information in the service and we can reuse it.
// It is used to inject the other service dependencies into the service.
// IN this case it does not have any dependency so the parameter list is empty
@Injectable()
export class EmployeeService {


    employeesArray:EmpData[]=[];

    employeeURL:string='api/employees';
    constructor(private _http:HttpClient){

    }
    // This is the data that we want to use accross multiple components.
    //  private employees:IEmployee[]= [
    //     {code:'1',name:'TOM',gender:'male',salary:3000},
    //     {code:'2',name:'Sara',gender:'female',salary:4000.656465},
    //     {code:'3',name:'Nick',gender:'male',salary:8000.565515},
    //     {code:'4',name:'Mary',gender:'female',salary:7000},
    //     {code:'5',name:'Mark',gender:'male',salary:3000.256444}
    // ];

    getEmployeeByApi():Observable<EmpData[]>{
        console.log(this._http.get<EmpData[]>(this.employeeURL));
       return this._http.get<EmpData[]>(this.employeeURL);
    }

    returnEmployeeArray()
    {
        this.getEmployeeByApi().subscribe((empdata)=>{
            console.log(empdata) 
            this.employeesArray= empdata;
        })
        return this.employeesArray;
    }

    // getEmployees():IEmployee[] {
    //     return this.employees;
    // }

    getName(name:string):string{
        return "Mr. "+name;
    }
    // getempbyid(id:string):IEmployee|undefined {
    //     return this.employees.find(x=>x.code==id);
    // }

    

    //for edit 
    findRowFromService(id:any)
   {
    this.returnEmployeeArray()
    let temp={}
    this.employeesArray.map(item=>{
      if(item.code==id)
      {
        temp = item;
      }
      return item
    })
    return temp;
    console.log("row printing")
   }

}