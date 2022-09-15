import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaddComponent } from './personadd/personadd.component';
import { PersonRoutingModule } from './person-routing.module';



@NgModule({
  declarations: [
    PersonaddComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule {
  constructor(){
    console.log('person module loaded');
    
  }
 }
