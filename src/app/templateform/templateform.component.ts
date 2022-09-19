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
  employees:any[];
  heroes: Hero[] = [];
  softherons$:Observable<any>;
  constructor( public bookService:BookService) { 
    this.employees=[
      {code:'1',name:'amin',salary:85000,dob:'02/aug/1990',gender:'male'},
      {code:'2',name:'khan',salary:1000,dob:'06/aug/1990',gender:'femlae'},
      {code:'3',name:'ali',salary:85000,dob:'08/aug/1990',gender:'femlae'},
      {code:'4',name:'jan',salary:32000,dob:'04/aug/1990',gender:'female'},
      {code:'5',name:'ahmad',salary:17855,dob:'05/aug/1995',gender:'male'},
    ]
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  //get data using async pipe
  getSoftHeros():void{
    this.softherons$=this.bookService.getHeroes();
  }
  getHeroes(): void {
    this.bookService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    console.log(this.heroes);
  }
  Register(regForm:any){
    var firstname=regForm.controls.firstname.value;
    console.log(firstname);
    console.log(regForm);
  }
}
