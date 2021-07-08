import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

    apiUrl = 'https://jsonplaceholder.typicode.com/posts/'


  constructor(private http: HttpClient) { }
  public getPosts(indice: any):Observable<any>{
    return this.http.get(`${this.apiUrl}${indice}`)

  }
  
}

