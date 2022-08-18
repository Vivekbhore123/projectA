import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { LoginService } from './core/services/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './employee/delete/delete.component';
import { EditComponent } from './employee/edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewComponent } from './employee/view/view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
 
const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[LoginService]},
  // {path:"dashboard",component:DashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"emplist",component:EmployeeComponent},
  {path:"viewemp/:empid",component:ViewComponent}, // required param
  {path:"editemp",component:EditComponent},  //optional param
  {path:"deleteemp",component:DeleteComponent}, //query param
  {path:"logout",component:LoginComponent},
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"**",component:LoginComponent},
];


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
