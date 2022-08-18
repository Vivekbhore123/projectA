import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[LoginService]
})
export class EmployeeComponent implements OnInit {

  constructor(private _service:LoginService,private router:Router) { }

  ngOnInit(): void {
   console.log(this.dataSource);
  }
  displayedColumns: string[] = ['code','fname','mname','lname', 'gender', 'userType','salary','pin','address1','address2','btns'];
  dataSource = this._service.getEmployees();

  
  edit()
  {
    // alert("test")
    this.router.navigate(["editemp"]);
  }
  

}
