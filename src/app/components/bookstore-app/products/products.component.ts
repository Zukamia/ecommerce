import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  livros: any;
  bookService: BooksService;

  constructor(bookService: BooksService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe((data) => {
      this.livros = data;
      console.log(this.livros);
    });
  }
}
