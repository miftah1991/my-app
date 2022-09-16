import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, timer } from "rxjs";
import { of } from "rxjs";







@Injectable()
export class CustomePreloadingStrategy implements PreloadingStrategy{
    preload(route:Route, load:()=>Observable<any>):Observable<any>{
        if(route.data && route.data['preload']){
            console.log('pre load'+route.path+'delay'+route.data['delay']);
            if(route.data['delay']){
                return timer(5000).pipe(()=>load());
            }
            return load();
        }else{
            return of(null)
        }
    }
}