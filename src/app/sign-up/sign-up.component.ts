import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  //property for the gender
    gender:string[];
    //property for the user
     user:User;
  

  ngOnInit() {
    this.gender = ['Male','Female','Others'];
    this.user=new User({
      email: "",password:{pwd:"",confirm_pwd:""},
      gender:this.gender[0],terms:false
    });
  }

}
