import { TestBed } from '@angular/core/testing';

import { UserProfilePresenterService } from './user-profile-presenter.service';

describe('UserProfilePresenterService', () => {
  let service: UserProfilePresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfilePresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
