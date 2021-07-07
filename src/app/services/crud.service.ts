import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';


const  apiUrl = 'http://localhost:3000/post'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  
  // Injetando Http Client
  constructor(private http: HttpClient) { }

  gravar(post: Post):Observable<Post>{
    return this.http.post<Post>(apiUrl, post)
  }
  
}

