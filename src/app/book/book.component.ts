
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
  employees:any[];
  constructor(public bookService:BookService) {
    this.employees=[
      {code:'1',name:'amin',salary:85000,dob:'02/aug/1990',gender:'male'},
      {code:'2',name:'khan',salary:1000,dob:'06/aug/1990',gender:'femlae'},
      {code:'3',name:'ali',salary:85000,dob:'08/aug/1990',gender:'femlae'},
      {code:'4',name:'jan',salary:32000,dob:'04/aug/1990',gender:'female'},
      {code:'5',name:'ahmad',salary:17855,dob:'05/aug/1995',gender:'male'},
    ]
   }
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
