import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {
  private serviceUrl = 'http://localhost:8080/user';
  
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.serviceUrl}/all`);
  }
  
  update(user: User): Observable<User> {
    return this.http.post<User>(`${this.serviceUrl}/update`, user);
  }

  delete(username: string): Observable<User> {
    return this.http.delete<User>(`${this.serviceUrl}/delete/${username}/`);
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(`${this.serviceUrl}/add`, user);
  }

}