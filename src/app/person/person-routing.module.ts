import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonaddComponent } from "./personadd/personadd.component";

const routes: Routes = [
    {path :'',component:PersonaddComponent},
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PersonRoutingModule { 
  
    
  }