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
    title: '',
    body: '',
    id: 0
  }

  ngOnInit(): void {
  }

  save(post: Post){
    alert(JSON.stringify(post, null, 4))
    this.service.post(post).subscribe(() =>{
      alert('Sucess')
    },
    () =>{
      alert('Error')
    }
    )
  }

}
