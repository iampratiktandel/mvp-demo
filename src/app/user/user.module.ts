import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserCdkContainerComponent } from './user-cdk-container/user-cdk-container.component';
import { UserProfilePresentationComponent } from './user-cdk-container/user-profile-presentation/user-profile-presentation.component';
import { UserProfileComponent } from './user-cdk-container/user-profile-presentation/user-profile/user-profile.component';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, UserCdkContainerComponent, UserProfilePresentationComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    OverlayModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UserProfileComponent
  ]
})
export class UserModule { }
