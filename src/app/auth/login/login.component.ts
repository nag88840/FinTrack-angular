import { Component } from '@angular/core';
import { LogindataService } from '../../service_files/logindata.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
}) 

export class LoginComponent {
  constructor(private service :LogindataService){}


  getdata(){

  }

}
