import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private httpcli: HttpClient) {
  }

getmyacct(): Observable<any> {
  return this.httpcli.get<any>('https://keralastats.coronasafe.live/latest.json').pipe((response) => response);

}
}
