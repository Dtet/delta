import { TestBed } from '@angular/core/testing';

import { QuestioncontrolService } from './questioncontrol.service';

describe('QuestioncontrolService', () => {
  let service: QuestioncontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestioncontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
