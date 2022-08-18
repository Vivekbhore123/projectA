import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { LoginService } from '../core/services/login.service';
import {PeriodicElement} from "../core/models/users.model"
import {Router} from '@angular/router'; 
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[LoginService]
})
export class RegisterComponent implements OnInit {

  username:string="admin";
  password:string="admin";
  dbuserobj:PeriodicElement[]=[];
 

  constructor(private obj:LoginService,private route:Router,private appOj:AppComponent,private navbar:NavbarComponent) { }

  ngOnInit(): void {
   
    this.dbuserobj = this.obj.getUsers();
  }

 
  go(){
		this.route.navigate(['/dashboard']); // navigate to other page
     this.appOj.checkIfLogin()
    //  this.navbar.changeStatus()
	}
  
savePerson(form:NgForm){
  console.log(form);
  console.log("**************");
  console.log(form.value);
  console.log(this.dbuserobj);

  if(this.dbuserobj[0].username == this.username && this.dbuserobj[0].password==this.password)
  {
    this.go();
  }

}

}
