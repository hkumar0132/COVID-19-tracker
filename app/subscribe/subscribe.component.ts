import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor(private fb : FormBuilder, private message : MessageService) { }

  userForm : FormGroup;
  verificationForm : FormGroup;
  verification : Boolean = false;

  user : {
    'name' : '',
    'email' : '',
    'country' : ''
  };

  ngOnInit(): void {
    this.userForm  = this.fb.group(
      {        
        'name' : ['', [Validators.required]],
        'email' : ['', [Validators.required, Validators.email]],
        'country' : ['India', [Validators.required]]
      }
    );

  }

  subscribe() {

    if(this.userForm.invalid) {
      alert('Please fill all the required fields correctly');
      return;
    }
   
    this.user = {
      'name' : this.checker.name.value,
      'email' : this.checker.email.value,
      'country' : this.checker.country.value
    }
  
    this.message.checkIfExists(this.user).subscribe(
      (data) => {
        console.log(data['message']);

        if(data['message'] == 'Email already subscribed') {
          alert(data['message']);
          this.userForm.reset();
          return;
        }
        else {

          //Send verification link to the user's email
          try {
            this.message.sendVerificationLink(this.user).subscribe();
            
            if(data['message'] == 'Email added but not verified\nverfication link sent again') {
              alert(data['message']);
            }
            
            this.verification = true;
          }
          catch(err) {
            alert('Error sending verification link : ' + err);
            this.userForm.reset();
            return;
          }
        }
      }
    );


  }

  resendVerificationLink() {
    this.message.sendVerificationLink(this.user).subscribe();
    alert('Verification Link sent again!');
  } 

  get checker() { 
    return this.userForm.controls; 
  }

}
