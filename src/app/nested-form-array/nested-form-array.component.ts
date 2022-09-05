import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form-array',
  templateUrl: './nested-form-array.component.html',
  styleUrls: ['./nested-form-array.component.css']
})
export class NestedFormArrayComponent implements OnInit {
  title:string="Nested Form Array component example";

  FormGroup: FormGroup;
  form:any;

  constructor(private fb:FormBuilder) {
    this.FormGroup=this.fb.group({
      ContactNos:this.fb.array([])
    });
   }

   ngOnInit(): void {
    // this.form= new FormGroup({
    //   ContactNos : new FormArray([
    //     new FormControl('988888888'),
    //     new FormControl('07888888'),
    //   ]),
    // });
   
   }
   contacts():any{
    this.form.get('ContactNos') as FormArray;
   }
   newContact():FormGroup{
    return this.fb.group({
      ContactNos:''
    })
   }
  
  addContactNo(){
    this.contacts().push(this.newContact());
  }
  onSubmit(){
    console.log(this.form.get('ContactNos').value);
  }
  setPreset(){
    this.form.get('ContactNos').patchValue(['123456','789']);
  }
}
