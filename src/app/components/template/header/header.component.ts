import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = ''
  sub  = ''
  constructor() { }

  ngOnInit(): void {
    this.title = 'Exibindo resultado de busca por "Covid 19"'
    this.sub = 'Encontramos um total de 20 resultados para sua busca'
  }

}
