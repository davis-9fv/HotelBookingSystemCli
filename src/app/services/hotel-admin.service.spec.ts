import { TestBed, inject } from '@angular/core/testing';

import { HotelAdminService } from './hotel-admin.service';

describe('HotelAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelAdminService]
    });
  });

  it('should be created', inject([HotelAdminService], (service: HotelAdminService) => {
    expect(service).toBeTruthy();
  }));
});
