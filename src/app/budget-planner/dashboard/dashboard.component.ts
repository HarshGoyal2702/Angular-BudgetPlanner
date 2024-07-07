import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule,MatIcon],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  lastMonthsIncome = ['Januaray:$1000','Febuaray:$1500','March : $1200'];
  currentMonthIncome = '$2000';

  lastMonthsExpense = ['Januaray:$800','Febuaray:$1000','March : $1200'];
  currentMonthExpense = '$1500';

// To Do Transaction
todoTransactions = [
  {description:'Pay electricity bill'},
  {description:'Submit monthly report'},
  {description:'Buy groceries'},
  {description:'Call insaurance company'},
]

totalCurrentMonthIncome =2000;
totalCurrentMonthExpense =1500;

constructor(public router:Router){}
onIncome(){
    this.router.navigate(['/budget-planner/income'])
  }
  onExpense(){
    this.router.navigate(['/budget-planner/expense'])
  }
  onTodo(){
    this.router.navigate(['/budget-planner/todo'])
  }

  get currentMonthSavings():number{
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }
}
