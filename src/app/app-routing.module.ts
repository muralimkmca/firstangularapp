import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from 'src/employee/department/department.component';
import { EmplistComponent } from 'src/employee/emplist/emplist.component';
import { EmployeeModule } from 'src/employee/employee.module';
import { HomeComponent } from 'src/employee/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [ 
  { path:'', component: AppComponent },
  { path:'department', component: DepartmentComponent },
  { path:'home', component: HomeComponent },
  { path:'emplist', component: EmplistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
