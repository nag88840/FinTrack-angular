import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeserviceService {
 api="http://localhost/Finance-API/test.php";
  constructor(private http :HttpClient) { }


  

  getting():Observable<any>{
    return this.http.get<any>(this.api+"?action=getData")
  }
}


