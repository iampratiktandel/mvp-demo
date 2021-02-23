import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Output() public user = new EventEmitter<FormGroup>();
  
  public userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  onSubmit(userForm: FormGroup) {
    console.log('UserProfile Component: ', userForm.value);
    this.user.emit(userForm.value);
  }
}
