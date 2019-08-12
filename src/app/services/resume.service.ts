import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private serviceUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  getUser(): Observable<any> {
    return this.http.get<any>(`${this.serviceUrl}/resume`);
  }
  
}
