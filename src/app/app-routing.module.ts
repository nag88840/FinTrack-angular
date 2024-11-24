import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './finance/income/income.component';
import { ExpenseComponent } from './finance/expense/expense.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
 import { DashboardComponent } from './finance/dashboard/dashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 
  {path:"home",component:DashboardComponent},
  {path:"income",component:IncomeComponent},
  {path:"expense",component:ExpenseComponent},
  {path:"register",component:SignupComponent},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
