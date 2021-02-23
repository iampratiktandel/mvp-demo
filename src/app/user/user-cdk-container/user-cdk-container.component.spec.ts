import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCdkContainerComponent } from './user-cdk-container.component';

describe('UserCdkContainerComponent', () => {
  let component: UserCdkContainerComponent;
  let fixture: ComponentFixture<UserCdkContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCdkContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCdkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
