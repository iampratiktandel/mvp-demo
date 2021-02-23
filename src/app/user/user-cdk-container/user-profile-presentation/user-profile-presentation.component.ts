import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserProfilePresenterService } from '../user-profile-presenter/user-profile-presenter.service';

@Component({
  selector: 'app-user-profile-presentation',
  templateUrl: './user-profile-presentation.component.html',
  styleUrls: ['./user-profile-presentation.component.css'],
  viewProviders: [UserProfilePresenterService]
})
export class UserProfilePresentationComponent implements OnInit {

  constructor(private userProfilePresenter: UserProfilePresenterService) { }

  ngOnInit(): void {
  }

  // call viewProfileOverlay() from Presenter
  public viewProfile(profileBtnRef: HTMLButtonElement) {
    this.userProfilePresenter.viewProfileOverlay(profileBtnRef)
  }

  public getUserData(value: any) {
    console.log(value);
  }
}
