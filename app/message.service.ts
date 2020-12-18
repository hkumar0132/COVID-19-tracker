import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class MessageService {
 
  constructor(private http: HttpClient) {}
 
  sendVerificationLink(user: { name: ""; email: ""; country: ""; }) {
    return this.http.post("http://localhost:3000/sendmail", user);
  }

  checkIfExists(user : { name: ""; email: ""; country: ""; }) {
    return this.http.post("http://localhost:3000/users", user);
  }

}