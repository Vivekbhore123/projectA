import { Component,OnInit } from '@angular/core';
import { LoginService } from './core/services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent implements OnInit {
  title = 'ProjectA';
  checkUserLoginStatus:boolean=false;
  constructor(private obj:LoginService)
  {

  }
  
  ngOnInit(): void {
    
   this.checkUserLoginStatus = this.obj.authenticate();
  } 

  checkIfLogin()
  {
    return this.obj.authenticate();
  }



 


}
