import { TestBed } from '@angular/core/testing';

import { CartasHTTPService } from './cartas-http.service';

describe('CartasHTTPService', () => {
  let service: CartasHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartasHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
