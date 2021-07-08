import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Post } from 'src/app/model/post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = ''  
  text = ''
  
  post: Post={
    title: '',
    body: '',
    id: 0
  }

  erro: any
  indice: any
  

  constructor(private crudService: CrudService) { 
   }


  ngOnInit(): void {
    this.title = 'Coronavírus: Como a doença é transmitida?'
    this.text = 'Saiba o que é o coronavírus, em quanto tempo a doença pode se manifestar e quais são os principais'
  }

  getter(indice: number){
    this.crudService.get(indice).subscribe((data: Post) =>{
      this.post = data;
      this.concatenar(data),
      this.concatenar2(data)
      

      console.log('O data que recebemos: '+ data.title,' --------------'+data.body);
      console.log('A variável que preenchemos: '+ data.id);
      
    
    }),(error: any) =>{
      this.erro = error;
      console.error('ERROR: ', error);
      
    }
  }
  
  concatenar(post: Post){    
    let teste = document.getElementById('postTextH2') as HTMLElement
    teste.innerText = post.title

  }
  concatenar2(post: Post){
    let teste2 = document.getElementById('postTextP') as HTMLElement
    teste2.innerText = post.body
  }

  
}


