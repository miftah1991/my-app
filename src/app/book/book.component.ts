import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title :string ='in memory web api';
  softtBook:Book[];
  constructor(public bookService:BookService) { }
  ngOnInit(): void {
    this.getSoftBooks();
    
  }
  getSoftBooks(){
    this.bookService.getBooksFromStore().subscribe(
      books=>this.softtBook=books
    )
    console.log(this.softtBook);
    
  }
 

}
