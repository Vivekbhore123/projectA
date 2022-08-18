import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[LoginService]
})
export class DashboardComponent implements OnInit {

 loginstatus:boolean=false;


  constructor(private route:Router,private obj:LoginService) { 
   

  }

 
  ngOnInit(): void {
    this.loginstatus = this.obj.getStatus();
    console.log("dashboard component - this.loginstatus = ",this.loginstatus);
   
  }

 

}
