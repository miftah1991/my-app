import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaddComponent } from './personadd/personadd.component';



@NgModule({
  declarations: [
    PersonaddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonModule {
  constructor(){
    console.log('person module loaded');
    
  }
 }
