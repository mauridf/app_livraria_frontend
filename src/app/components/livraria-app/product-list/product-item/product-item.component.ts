import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../model/livros.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  url : string = "";

  @Input()
  livro!: Livro;

  constructor() {

   }

  ngOnInit(): void {



  }

}
