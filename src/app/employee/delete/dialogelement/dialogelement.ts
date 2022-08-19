import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";


@Component({
    selector: 'dialog-elements-example-dialog',
    templateUrl: 'dialogelement.html',
  })
  export class DialogElementsExampleDialog {
    constructor(public dialogRef:MatDialogRef<DialogElementsExampleDialog>,public router:Router)
    {

    }

    closedialog()
    {
        this.dialogRef.close();
        setTimeout(()=>{
        this.router.navigate(["emplist"])
        },
        3000
        )
    }
  }