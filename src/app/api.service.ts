import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpClient: HttpClient) { }
  private dataURL: string = "https://www.techiediaries.com/api/data.json";

  fetch(): Observable<any[]> {
    return <Observable<any[]>>this.httpClient.get(this.dataURL);
  }


}
