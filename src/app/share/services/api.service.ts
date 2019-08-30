import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

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

  /**
   * Call the delete route of the api for a student
   * @param id Id of a student to delete from database
   */
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(
      ApiService._API_ROOT_ + 'eleve/' + id,
      {
        observe: 'response'
      }
    );
  }

  public add(student: Student): Observable<any> {
    return this.httpClient.post(
      ApiService._API_ROOT_ + 'eleve',
      student
    );
  }
}
