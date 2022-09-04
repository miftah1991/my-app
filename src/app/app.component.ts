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
  people:any[];
  users:any[];
  colspan:number=3;
  twowaydata?:any="Miftah";
  twowaydata1?:any="Amin";
  employees:any[];
  Position:string ="MIS Delveloper"
  percentage:number =50.2365566;

  emp:any
  constructor(){
    this.employees=[
      {code:'1',name:'amin',salary:85000,dob:'02/aug/1990',gender:'male'},
      {code:'2',name:'khan',salary:1000,dob:'06/aug/1990',gender:'femlae'},
      {code:'3',name:'ali',salary:85000,dob:'08/aug/1990',gender:'femlae'},
      {code:'4',name:'jan',salary:32000,dob:'04/aug/1990',gender:'female'},
      {code:'5',name:'ahmad',salary:17855,dob:'05/aug/1995',gender:'male'},
    ]
    this.users =['ahmad','khalid','omer']
    this.people=[
      {name:'miftah'  ,country:'Af'},{name:'amin'  ,country:'Pk'},{name:'khan'  ,country:'UK'},{name:'Ibrahim'  ,country:'USA'},
    ]
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
  getcolor(country:string):string{
    switch(country){
      case 'Af': return 'green';
      case 'UK': return 'green';
      case 'USA': return 'red';
      default: return 'black';
    }
  }
  getcssclass(flag:string){
    let cssclass;
    if(flag=='mode'){
      cssclass ={'one':true,'two':true}
    }else{
      cssclass ={'three':true,'four':true}
    }
    return cssclass;
  }
  onClick():void{
    alert('event binding')
  }
  setvalue(event:any):void{
    this.twowaydata = event.target.value;
  }
}
