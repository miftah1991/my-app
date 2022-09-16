import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable } from "rxjs";
import { of } from "rxjs";







@Injectable()
export class CustomePreloadingStrategy implements PreloadingStrategy{
    preload(route:Route, load:()=>Observable<any>):Observable<any>{
        if(route.data && route.data['preload']){
            console.log('pre load'+route.path);
            return load();
        }else{
            return of(null)
        }
    }
}