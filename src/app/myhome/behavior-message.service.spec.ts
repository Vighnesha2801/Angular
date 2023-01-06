import { TestBed } from '@angular/core/testing';

import { BehaviorMessageService } from './behavior-message.service';

describe('BehaviorMessageService', () => {
  let service: BehaviorMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
