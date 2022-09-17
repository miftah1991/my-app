import { Injectable } from '@angular/core';
import { InMemoryDbService  } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './Hero';
import { catchError, Observable, of, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  // bookURL="api/books";
  // SERVER_URL: string = "http://localhost:8080/api/";
  private heroesUrl = 'api/heroes';
  constructor(private httpClient:HttpClient) {
      
   }
  //  getBooksFromStore():Observable<Book[]>{
  //   return this.httpClient.get<Book[]>(this.bookURL)
  // }
  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl);
      // .pipe(
      //   tap(_ => this.log('fetched heroes')),
      //   //catchError(this.handleError<Hero[]>('getHeroes', []))
      // );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
    this.log(message)
  }
}


