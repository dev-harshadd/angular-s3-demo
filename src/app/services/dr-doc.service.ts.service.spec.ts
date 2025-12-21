import { TestBed } from '@angular/core/testing';

import { DrDoc.Service.TsService } from './dr-doc.service.ts.service';

describe('DrDoc.Service.TsService', () => {
  let service: DrDoc.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrDoc.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
