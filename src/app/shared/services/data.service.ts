import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor( private htpp: HttpClient) { }
  private selectUrl = '/COMPAS/';
  private httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json'
    }),
  };
  
}
