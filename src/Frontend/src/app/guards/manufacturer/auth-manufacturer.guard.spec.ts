import { TestBed } from '@angular/core/testing';

import { AuthManufacturerGuard } from './auth-manufacturer.guard';

describe('AuthManufacturerGuard', () => {
  let guard: AuthManufacturerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthManufacturerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
