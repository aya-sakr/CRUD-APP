import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IEmpolyee } from '../../interface/iempolyee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
 empolyeeForm:FormGroup
 empolyeeData!: IEmpolyee
 id:number=0


constructor(fb:FormBuilder){
  this.empolyeeForm= fb.group({
    empId:new FormControl(""),
    name:  new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.email,Validators.required]),
    contactNo:new FormControl("",[Validators.required]),
    city:new FormControl("",[Validators.required]),
    state:new FormControl("",[Validators.required]),
    pinCode:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required])

  })






}
onSave(){
//   const oldData= localStorage.getItem("empolyeeData")
// if(oldData != null){
//   const parsDate = JSON.parse(oldData)
//

// }else{
//

// }

  // if(this.empolyeeForm.valid){
  //
  // }

  if(this.empolyeeForm.valid){
    this.empolyeeData = this.empolyeeForm.value
    localStorage.setItem('empolyeeData',JSON.stringify(this.empolyeeData ))
    this.empolyeeForm.controls['empId'].setValue(this.id)






  }else{
    alert("this form is not vaild")

  }

}



}
