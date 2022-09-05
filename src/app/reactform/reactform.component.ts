import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,NgForm ,Validators} from '@angular/forms';
import { formsignup } from './formsignup';
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
    //Single Controle  Form Control
      this.signupForm.get('fname')?.valueChanges.subscribe( 
        fn =>{console.log('fname is changed to'+fn)}
      )
      //Complete form Form Group
      this.signupForm.valueChanges.subscribe((uname:formsignup) =>{
        console.log('fname is change'+uname.fname);
        console.log('lname is change'+uname.lname);
        console.log('email is change'+uname.emailid);
        console.log('password is change'+uname.pass);
        
      })
      //Status Check
      this.signupForm.get('fname')?.statusChanges.subscribe(
        fn =>{console.log("Status:"+fn);}
      )
      //Check status of form
      this.signupForm.statusChanges.subscribe(
        fn =>{console.log("Form Status:"+fn);}
      )
      //C
  }
  PostData(signupForm:any){
    this.firstName = signupForm.controls.fname.value;
    console.log(this.firstName);
    
    console.log(signupForm.controls);
    
  }
  PostData1(){
    this.firstName = this.signupForm.get('fname')?.value;
    this.lastName = this.signupForm.get('lname')?.value;
    this.email = this.signupForm.get('email')?.value;
    console.log(this.firstName+'-----'+this.lastName);
    console.log(this.signupForm.value);
    
    
  }
  resetForm(){
    //this.signupForm.reset();
    this.signupForm.reset({
      fname:'Miftah',
      lname:'Amin'
    })
  }
  fillData(){
    this.signupForm.setValue({
      fname:'Miftah',
      lname:'Amin',
      emailid:'miftah.amin1991@gmail.com',
      pass:'1111'
    });
  }
  patchData(){
    this.signupForm.patchValue({
      fname:'Miftah',
      lname:'Amin',
    });
  }
}
