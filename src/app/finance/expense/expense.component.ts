import { Component } from '@angular/core';
import { LogindataService } from '../../service_files/logindata.service';

@Component({
  selector: 'app-expense',
  standalone: false,
  
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
constructor(private service :LogindataService){}
  // users(){
  //   this.service.getting().subscribe((data)=>{
  //     console.log(data);
  //   })

  // }

}
