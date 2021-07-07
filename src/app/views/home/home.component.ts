import { Component, OnInit } from '@angular/core';
// import { CrudService } from 'src/app/services/crud.service';
// import { Post } from 'src/app/models/jsonplaceholder.module';


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
  // "posts": Post
  // post = {} as Post
  
  // erro: any
  // lista: any
  // indice: any
  
  // indicee: any

  // constructor(private crudService: CrudService) { 
  //  }


  ngOnInit(): void {
    this.title = 'Encontramos um total de 20 resultados para sua busca'
    this.text = 'Saiba o que é o coronavírus em quanto tempo a doença pode se manifestar e quais são os principais'
  }

  // getter(indice: any){
  //   this.crudService.getPosts(indice).subscribe((data: Posts) =>{
  //     this.posts = data;
  //     this.mountPosts(data)

  //     var numero1 = indice
  //     console.log(numero1+numero1)
      
      

  //     console.log('O data que recebemos: ', data.title,' --------------' , ' ',data.body);
  //     console.log('A variável que preenchemos: ', this);
      
      
      
  //   }),(error: any) =>{
  //     this.erro = error;
  //     console.error('ERROR: ', error);
      
  //   }
  // }

  // // Salvar post
  // savePost(form: NgForm) {    
    
  //     this.crudService.savePost(this.post).subscribe(() => {
  //       // this.cleanForm(form);
  //     });
    
  // }
  
  // mountPosts(lista: any){
  //   let html: any = '';
  //   html += '<h3>'+lista.title+'</h3>';
  //   html += lista.body+'<br/>';
  //   html += '<hr/>'; 

  //   console.log()

  //   this.concatenar(html)     
  
  // }
  // concatenar(html: any){    
  //   let teste = document.getElementById(`postsText${1}`) as HTMLElement
  //   teste.innerHTML = html
  // }

  
}


