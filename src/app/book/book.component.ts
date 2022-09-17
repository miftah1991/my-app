import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title :string ='in memory web api';
  //softtBook:Book[];
  heroes: Hero[] = [];
  constructor(public bookService:BookService) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.bookService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  // getSoftBooks(){
  //   this.bookService.getBooksFromStore().subscribe(
  //     books=>this.softtBook=books
  //   )
  //   console.log(this.softtBook);
    
  // }
 

}
