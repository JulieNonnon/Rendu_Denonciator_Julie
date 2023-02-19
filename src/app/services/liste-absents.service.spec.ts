import { TestBed } from '@angular/core/testing';

import { ListeAbsentsService } from './liste-absents.service';

describe('ListeAbsentsService', () => {
  let service: ListeAbsentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeAbsentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
