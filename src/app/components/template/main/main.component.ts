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
    lista: string = ''

    // post = {} as Posts

    

  constructor(private crudService: CrudService) { 
    // this.getter();
   }

  ngOnInit(): void {
    this.title = 'Encontramos um total de 20 resultados para sua busca'
    this.text = 'Saiba o que é o coronavírus em quanto tempo a doença pode se manifestar e quais são os principais'
    this.lista = ''
  }

  getter(){
    this.crudService.getPosts().subscribe((data: Posts) =>{
      this.posts = data;
      
      console.log('O data que recebemos', data.title+' -' + ' '+data.body);
      console.log('A variável que preenchemos', this.title);
      this.mountPosts()
      
      
    }),(error: any) =>{
      this.erro = error;
      console.error('ERROR: ', error);
      
    }
  }

  mountPosts(){
    let html = '';
    let lista = '';
    // for(let i in numero)
    html += '<h3>'+lista+'</h3>';
    html += lista+'<br/>';
    html += '<hr/>';   

    let teste = document.getElementById('postsText') as HTMLDivElement
    teste.innerHTML = html;
  }
  
}