import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-ang-material',
  templateUrl: './ang-material.component.html',
  styleUrls: ['./ang-material.component.css']
})
export class AngMaterialComponent implements OnInit {
  regForm:FormGroup;
  firstName:string='';
  lastName:string='';
  Address:string='';
  DOB:Date | null=null;
  Gender:string='';
  Email:string='';
  IsAccepted:number=0;
  PlayList:string='';

  constructor(private fb:FormBuilder) { 
    this.regForm =fb.group({
      'firstName':[null,Validators.required],
      'lastName':[null,Validators.required],
      'Address':[null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(200)])],
      'DOB':[null,Validators.required],
      'Gender':[null,Validators.required],
      'PlayList':[null,Validators.required],
      'Email':[null,Validators.compose([Validators.required,Validators.email])],
      'IsAccepted':[null],


    })
  }
  onChange(event:any){
    if(event.checked==true){
      this.IsAccepted=1
    }else{
      this.IsAccepted=0;
    }
  }
  onFormSubmit(form:any){
    console.log(form);
    
  }
  ngOnInit(): void {
  }

}
