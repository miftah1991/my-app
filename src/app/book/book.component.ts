
import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Hero } from '../hero';




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
    console.log(this.heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bookService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.bookService.deleteHero(hero.id).subscribe();
  }
  // getSoftBooks(){
  //   this.bookService.getBooksFromStore().subscribe(
  //     books=>this.softtBook=books
  //   )
  //   console.log(this.softtBook);
    
  // }
 

}
