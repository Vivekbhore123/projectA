import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[LoginService]
})
export class NavbarComponent implements OnInit {

  @Input()     
  checkUserLoginStatus:boolean=false;

  constructor(private obj:LoginService,private router:Router)
  {
    // this.checkUserLoginStatus = obj.isLoggedIn();
  }
  
  ngOnInit(): void {
    
  
  } 

  performLogOut()
  {
    alert("logout")
    // localStorage.removeItem("passM");
    // localStorage.removeItem("userM");
    localStorage.clear();
    this.router.navigate(['/login'])
  }



}

