import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  // bookURL="api/books";
  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient:HttpClient) {
      
   }
  //  getBooksFromStore():Observable<Book[]>{
  //   return this.httpClient.get<Book[]>(this.bookURL)
  // }
  public getPolicies(){ 
    return this.httpClient.get(this.SERVER_URL + 'policies');
}
}


