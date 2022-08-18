import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import { LoginService } from '../core/services/login.service';
import {PeriodicElement} from "../core/models/users.model"
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router'; 
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Observable } from 'rxjs';
import { MatError } from '@angular/material/form-field';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

 
  username:string="";
  password:string="";
  dbuserobj:PeriodicElement[]=[];

  
 

  constructor(private obj:LoginService,private router:Router,private appOj:AppComponent,private navbar:NavbarComponent) { }

  ngOnInit(): void {
   
    this.dbuserobj = this.obj.getUsers();

    // test
    this.obj.setStatus();
    // test
  }
  

  
  

 

  
savePerson(form:NgForm){

  this.obj.setCredentials(this.username,this.password);
  this.validateUser()
  

}

validateUser()
{
  if(this.obj.authenticate())
  {
    this.router.navigate(['/dashboard'])
  }
  else 
  {
    this.router.navigate(['/login'])
  }
}

}

