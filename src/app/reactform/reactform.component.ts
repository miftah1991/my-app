import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,NgForm ,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  title="Reactive Form";
  signupForm:FormGroup;
  firstName:string="";
  lastName:string="";
  email:string="";
  password:string="";
  constructor(private formbuilder:FormBuilder) {
    this.signupForm=formbuilder.group({
      fname:new FormControl(this.firstName, Validators.required),
      lname:['',Validators.required],
      emailid:['',Validators.email],
      pass:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  PostData(signupForm:any){
    this.firstName = signupForm.controls.fname.value;
    console.log(this.firstName);
    
    console.log(signupForm.controls);
    
  }

}
