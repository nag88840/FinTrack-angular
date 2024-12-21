import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {
 api="https://jsonplaceholder.typicode.com/users";
  constructor(private http :HttpClient) { }


  data(val:any){
    console.log(val);
  }

  getting():Observable<any>{
    return this.http.get(this.api)
  }
}
