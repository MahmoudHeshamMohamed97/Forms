import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
declare let $:any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signIn = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  }); 

  constructor() { }

  signInFunc(){
    if( this.signIn.valid ){
      console.log(this.signIn);
    }
  }

  ngOnInit(): void {
    $('#signIn').particleground({
      dotColor: '#fff',
      lineColor: 'blue',
    });
  }

}
