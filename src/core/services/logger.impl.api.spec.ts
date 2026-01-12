import { TestBed } from '@angular/core/testing';

import { LoggerImplApi } from './logger.impl.api';

describe('LoggerImplApi', () => {
  let service: LoggerImplApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerImplApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
