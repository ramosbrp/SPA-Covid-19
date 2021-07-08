import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Post } from 'src/app/model/post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // numero = [0,1,2,3,4,5]
  title = ''  
  text = ''
  // postsText = ''
  
  post: Post={
    title: '',
    body: '',
    id: 0
  }

  erro: any
  // lista: any
  indice: any
  
  // indicee: any

  constructor(private crudService: CrudService) { 
   }


  ngOnInit(): void {
    this.title = 'Coronavírus: Como a doença é trnasmitida?'
    this.text = 'Saiba o que é o coronavírus, em quanto tempo a doença pode se manifestar e quais são os principais'
  }

  getter(indice: number){
    this.crudService.getPosts(indice).subscribe((data: Post) =>{
      this.post = data;
      this.mountPosts(data)

  // getter(post: Post):Observable<Post>{
  //   return this.http.get<Post>(apiUrl, post)
  // }

      // var numero1 = indice
      // console.log(numero1+numero1)
      
      

      console.log('O data que recebemos: ', data.title,' --------------' , ' ',data.body);
      console.log('A variável que preenchemos: ', data);
      
    
    }),(error: any) =>{
      this.erro = error;
      console.error('ERROR: ', error);
      
    }
  }
  
  mountPosts(post: Post){
    let html: any = '';
    html += '<h3>'+post.title+'</h3>';
    html += '<p>'+post.body+'</p>'+'<hr/>';
    // html += '<hr/>';

    console.log()

    this.concatenar(html)     
  
  }
  concatenar(html: any){    
    let teste = document.getElementById(`postsText${1}`) as HTMLElement
    teste.innerHTML = html
  }

  
}


