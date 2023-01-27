import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }
  private selectUrl = '/COMPAS/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };
  getInfo(): Observable<any> {
    return this.http.get(this.selectUrl)
      .pipe(
        map((response: any) => response
          .map((data: any) => data['Serie'])))
  }
} 
