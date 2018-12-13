import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseEndPoint = 'https://swapi.co/api/';
  //baseEndPoint = '/api/';
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': 'anonymous'
    //'withCredentials': 'true'
  })
};

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPersons(): Observable<any> {
  return this.http.get(this.baseEndPoint + 'people', this.httpOptions).pipe(
    map(this.extractData));

  }
  getPlanet(planetUrl){
    return this.http.get(this.baseEndPoint + "planets"+ planetUrl).pipe(
      map(this.extractData));
  }

  getPerson(url): Observable<any> {
    return this.http.get(this.baseEndPoint + "people/" + url).pipe(
      map(this.extractData));
  }


}
