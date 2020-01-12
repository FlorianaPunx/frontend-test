import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly url: string = 'http://localhost:3000/items';
  constructor(private http: HttpClient) { }

  public getItems(): Observable<any> {
    return this.http.get(this.url);
  }
}
