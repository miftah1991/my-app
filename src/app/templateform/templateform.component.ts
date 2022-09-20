import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { BookService } from '../book.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  heroes: Hero[] = [];
  softherons$:Observable<any>;
  hero: Hero | undefined;
  constructor( public bookService:BookService) { 
  }
  ngOnInit(): void {
    this.getHeroes();
    this.getHero();
  }
  //get data using async pipe
  getSoftHeros():void{
    this.softherons$=this.bookService.getHeroes();
  }
  getHeroes(): void {
    this.bookService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    //console.log(this.heroes);
  }
  getHero(): void {
    this.bookService.getHero(12)
      .subscribe(hero => this.hero = hero);
  }

  Register(regForm:any){
    var firstname=regForm.controls.firstname.value;
    console.log(firstname);
    console.log(regForm);
  }
}
