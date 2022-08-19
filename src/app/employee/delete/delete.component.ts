import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LoginService} from "../../core/services/login.service"
import { DialogElementsExampleDialog } from "./dialogelement/dialogelement";
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[DialogElementsExampleDialog]
})
export class DeleteComponent implements OnInit {

  constructor(private _route:ActivatedRoute,public serviceobj:LoginService,public dialog: MatDialog) { }
  empCode:string="";
  tempObj:any={}
  ngOnInit(): void {
    if(this._route.snapshot.queryParamMap.has('code')){

      this.empCode= this._route.snapshot.queryParamMap.get('code')!;
           }
           console.log(this.empCode)
           this.tempObj = this.serviceobj.findRowFromService(this.empCode);

           
           
  }

  
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }




}
