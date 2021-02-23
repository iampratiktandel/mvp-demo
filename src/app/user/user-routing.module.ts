import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCdkContainerComponent } from './user-cdk-container/user-cdk-container.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserCdkContainerComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
