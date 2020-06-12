import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';

declare let $:any; 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUp= new FormGroup({
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
  });

  signUpFunc(){
    if( this.signUp.valid ){
      console.log(this.signUp);
    }
  }

  constructor() { }

  ngOnInit(): void {
    $('#signUp').particleground({
      dotColor: '#ff0000',
      lineColor: 'blue',
    });
  }

}
