import { Component } from '@angular/core';
import { LogindataService } from '../../service_files/logindata.service';
import { Observable } from 'rxjs';
import { response } from 'express';
@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  data:any;
  constructor(private service:LogindataService){
    
  }
  value(){
    this.data=false;
    // this.service.data(this.data).subscribe(
    //   (response)
    // );
  }

}
