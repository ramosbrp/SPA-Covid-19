import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: CrudService ) { }
  post: Post ={
    til: '',
    bd: ''
  }

  ngOnInit(): void {
  }

  gravar(post: Post){
    alert(JSON.stringify(post, null, 4))
    this.service.gravar(post).subscribe(() =>{
      alert('Sucess')
    },
    () =>{
      alert('Error')
    }
    )
  }

}
