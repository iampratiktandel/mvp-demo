import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePresentationComponent } from './user-profile-presentation.component';

describe('UserProfilePresentationComponent', () => {
  let component: UserProfilePresentationComponent;
  let fixture: ComponentFixture<UserProfilePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
