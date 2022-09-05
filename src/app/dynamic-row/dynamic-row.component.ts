import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-row',
  templateUrl: './dynamic-row.component.html',
  styleUrls: ['./dynamic-row.component.css']
})
export class DynamicRowComponent implements OnInit {
  empForm: FormGroup

  constructor(private fb: FormBuilder) { 

    this.empForm = this.fb.group({
          employees: this.fb.array([])
      }); 

      this.employees().push(this.newEmployee());
  }

  ngOnInit(): void {
   
  }
  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }
  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
    });
  }
  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }



  onSubmit() {
    console.log(this.empForm.value);
  }
}
