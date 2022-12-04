import { TestBed } from '@angular/core/testing';

import { ProfileguardGuard } from './profileguard.guard';

describe('ProfileguardGuard', () => {
  let guard: ProfileguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfileguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
