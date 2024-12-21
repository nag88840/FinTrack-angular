import { Component } from '@angular/core';
import { IncomeserviceService } from '../../incomeservice.service';
import { Subscribable } from 'rxjs';
import { Subscriber } from 'rxjs';

 @Component({
  selector: 'app-income',
  standalone: false,
  
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  constructor( private service : IncomeserviceService){

  }

  getdata(){
    console.log("working!!!!!!!!!!!");
    
        this.service.getting().subscribe((data)=>{
          console.log(data);
        })
  }
 

}
