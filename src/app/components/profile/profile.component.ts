import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  // showEditDelete()
  // {
  //   let x = $(".menu");
  //   if( getComputedStyle(x).display == "none" ){
  //     x.css("display","inline")
  //   }
  //   else{
  //     x.css("display","none")
  //   }
  // }

  ngOnInit(): void {
  }

}
