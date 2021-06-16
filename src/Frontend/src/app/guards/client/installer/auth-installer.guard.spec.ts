import { TestBed } from '@angular/core/testing';

import { AuthInstallerGuard } from './auth-installer.guard';

describe('AuthInstallerGuard', () => {
  let guard: AuthInstallerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthInstallerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
