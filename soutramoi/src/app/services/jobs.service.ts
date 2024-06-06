import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
 // private url = 'http://127.0.0.1:8000/api/jobs';

  constructor(private httpClient: HttpClient) { }
  /*getJobs(){
    return this.httpClient.get(this.url);
  }*/
  getJobs(): Observable<any> {
    var url="http://localhost:8000/api/jobs"
    return this.httpClient.get(url);
  }
}
