import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  Page_Id!: string;
  url = environment.baseApi;
  page: any[] = [];
  public getJsonValue: any;
  public postJsonValue: any;


  public getMethod() {
    this.http.get(this.url).subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
    })
  }
  postTrip(tripData: any): Observable<any> {
    return this.http.post<any>(`${this.url}/Getplacenames`, tripData);

  }

  // private handleError(error: any) {
  //   console.error('API Error:', error);
  //   throw error;
  // }
}

