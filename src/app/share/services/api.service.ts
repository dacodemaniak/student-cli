import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private static readonly _API_ROOT_: string = 'http://localhost:5000/';

  constructor(private httpClient: HttpClient) { }

  public getAllStudents(): Observable<any> {
    return this.httpClient.get(
      ApiService._API_ROOT_ + 'eleve'
    );
  }
}
