import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { EmplistComponent } from './emplist/emplist.component';



@NgModule({
  declarations: [
    HomeComponent,
    DepartmentComponent,
    EmplistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
