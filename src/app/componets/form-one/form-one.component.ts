import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent implements OnInit {

  fullName= new FormControl();
  address= new FormControl();
  email= new FormControl();
  dob= new FormControl();
  message= new FormControl();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formdata:NgForm){
    console.log(formdata);
  }

  save(){
    alert (this.fullName.value);
  }

}
