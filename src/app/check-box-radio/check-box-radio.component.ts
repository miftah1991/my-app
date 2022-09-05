import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import { User } from './User';
@Component({
  selector: 'app-check-box-radio',
  templateUrl: './check-box-radio.component.html',
  styleUrls: ['./check-box-radio.component.css']
})
export class CheckBoxRadioComponent implements OnInit {
  title:string="Check box and Radio button"
  user=new User('','',false);;
  form:any;
  constructor() {
   }
  ngOnInit(): void {
  }
  onFormSubmit(form:NgForm){
    if(form.invalid){
      return;
    }else{
      console.log('esle part')
      console.log('username-'+form.controls['uname'].value);
      console.log('gender-'+form.controls['gender'].value);
      console.log('Married-'+form.controls['married'].value);
      
    }
  }
  resetForm(form:NgForm){
    this.user = new User('','',false);
    this.form.resetForm();
  }
  setDefaultValues(form:NgForm):void{
    this.user.name="miftah";
    this.user.gender='M';
    this.user.isMarried=true;
    this.user.isTCAccepted=true;
    //this.form.setValue(this.user)
  }
}
