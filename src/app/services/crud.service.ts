import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainComponent } from '../components/template/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiUrl = 'https://jsonplaceholder.typicode.com/posts/'
  
  public indice: any

  constructor(private http: HttpClient) { }
  public getPosts(indice: any):Observable<any>{
    return this.http.get(`${this.apiUrl}${indice}`),

    this.indice = indice;
    

  }
  
}

