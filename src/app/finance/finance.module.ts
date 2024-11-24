import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    IncomeComponent,
    ExpenseComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FinanceModule { }
