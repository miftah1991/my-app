import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  Students:any[];
  countrydetail:any[];
  
  constructor(){
    this.countrydetail=[
      {
        country:'Af',
        peoples:[{ name:'ahmad'},{ name:'af2'},{ name:'af3'},{ name:'af4'},]
      },
      {
        country:'PK',
        peoples:[{ name:'ALI'},{ name:'KHAN'},{ name:'PK2'},{ name:'PK3'},]
      },
    ]
    this.Students=[
      {
        studentid:1,
        name:'Miftah',
        gender:'Male',
        Age:32,
        Course:'MIS'

     },
      {
        studentid:2,
        name:'Qasim',
        gender:'Male',
        Age:25,
        Course:'IT'
     },
      {
        studentid:3,
        name:'Ibrahim',
        gender:'Male',
        Age:23,
        Course:'MS'
     },
      {
        studentid:4,
        name:'Ali',
        gender:'Male',
        Age:34,
        Course:'bcs'
     },
    ]
  }
  getmorestudents():void{
    this.Students=[
      {
        studentid:1,
        name:'Miftah',
        gender:'Male',
        Age:32,
        Course:'MIS'

     },
      {
        studentid:2,
        name:'Qasim',
        gender:'Male',
        Age:25,
        Course:'IT'
     },
      {
        studentid:3,
        name:'Ibrahim',
        gender:'Male',
        Age:23,
        Course:'MS'
     },
      {
        studentid:4,
        name:'Ali',
        gender:'Male',
        Age:34,
        Course:'bcs'
     },
     {
      studentid:5,
      name:'new emp',
      gender:'Female',
      Age:16,
      Course:'IT'
   },
    ]
  }
  trackbystudentid(index:number,student:any):string{
    return student.studentid;
  }
  


}
