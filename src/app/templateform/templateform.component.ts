import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Register(regForm:any){
    var firstname=regForm.controls.firstname.value;
    console.log(firstname);
    console.log(regForm);
  }
}
