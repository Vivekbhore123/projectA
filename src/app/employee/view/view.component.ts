import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _route:ActivatedRoute,public serviceobj:LoginService) { }
  empCode:string="";
  tempObj:any={}


  ngOnInit(): void {

         this.empCode=this._route.snapshot.paramMap.get('empid')!;
        
           console.log(this.empCode)
           this.tempObj = this.serviceobj.findRowFromService(this.empCode);
           console.log(this.tempObj)

  }

}
