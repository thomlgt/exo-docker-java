import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseMessage } from '../models/base-message.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http : HttpClient) { }

  getHello() {
    return this.http.get<BaseMessage>("http://localhost:8080/api/hello");
  }
}
