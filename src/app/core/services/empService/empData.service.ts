import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { EmpData,UserType } from '../../models/users.model';

export class EmpDataService implements InMemoryDbService{

    constructor(){
 
    }   
    // createDb(): {} | Observable<{}> | Promise<{}> {
    //     throw new Error('Method not implemented.');
    // }
    createDb() {
       return {
        employees: [
            { code:1,fname:"tom",mname:"mdtom",lname:"ljsjd",gender:"male",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"",age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" },
            { code:2,fname:"ram",mname:"dom",lname:"ajax",gender:"female",userType:UserType.Permenant,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24"  },
            { code:2,fname:"ram",mname:"dom",lname:"ajax",gender:"female",userType:UserType.Permenant,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24"  },
            { code:3,fname:"shyam",mname:"shell",lname:"jquery",gender:"female",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24"  },
            { code:4,fname:"seeta",mname:"toor",lname:"json",gender:"male",userType:UserType.Permenant,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24"  },
            { code:5,fname:"geeta",mname:"moore",lname:"xml",gender:"female",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi",btns:""  ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" },
            { code:6,fname:"dell",mname:"pqr",lname:"lambda",gender:"male",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi" ,btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" },
            { code:7,fname:"bill",mname:"xyz",lname:"pixel",gender:"male",userType:UserType.Contractual,salary:2000,pin:334421,address1:"mumbai",address2:"delhi" ,btns:"" ,age:23,country:"India",state:"Maharashtra",city:"Mumbai",dob:"2022-08-24" },
        ]
    };    
    }

}
//mytest
// difference between observable and promise;
//observable returns data in the form of chunks while promises does not

//Observable and Observer or Subscriber
//Observable- Asynchronous pattern which emit the data for us. We have Obervable and observer.
//Observer observes the observable.
//Observable can have multiple observer or subscriber.
//When a subscriber subscribes to an observable , the subscriber specify a callback function.
// The subscriber call back function is notified as and when the observables
// emit items or data or notifications.
//In the call back function we define or write the line of code to handle the data or item
// recieved from observables

