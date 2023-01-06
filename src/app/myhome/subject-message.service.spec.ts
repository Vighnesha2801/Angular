import { TestBed } from '@angular/core/testing';

import { SubjectMessageService } from './subject-message.service';

describe('SubjectMessageService', () => {
  let service: SubjectMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
