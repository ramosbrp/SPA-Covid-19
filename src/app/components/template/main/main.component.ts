import { HtmlAstPath } from '@angular/compiler';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Posts } from '../../../models/jsonplaceholder.module';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  numero = [0,1,2,3,4,5]
  title = ''  
  text = ''
  postsText = ''
    "posts": Posts
    erro: any
    lista: any
    indice: any
    post = {} as Posts
    indicee: any

  constructor(private crudService: CrudService) { 
   }


  ngOnInit(): void {
    this.title = 'Encontramos um total de 20 resultados para sua busca'
    this.text = 'Saiba o que é o coronavírus em quanto tempo a doença pode se manifestar e quais são os principais'
  }

  getter(indice: any){
    this.crudService.getPosts(indice).subscribe((data: Posts) =>{
      this.posts = data;
      this.mountPosts(data)

      // console.log(numero1+numero1)
      
      

      console.log('O data que recebemos: ', data.title,' --------------' , ' ',data.body);
      console.log('A variável que preenchemos: ', this);
      
      
      
    }),(error: any) =>{
      this.erro = error;
      console.error('ERROR: ', error);
      
    }
  }
  
  mountPosts(lista: any){
    let html: any = '';
    html += '<h3>'+lista.title+'</h3>';
    html += lista.body+'<br/>';
    html += '<hr/>'; 

    console.log()

    this.concatenar(html)     
  
  }
  concatenar(html: any){    
    let teste = document.getElementById(`postsText${1}`) as HTMLElement
    teste.innerHTML = html
  }

  
}


