import { TestBed } from '@angular/core/testing';

import { LoggerImplConsole } from './logger.impl.console';

describe('LoggerImplConsole', () => {
  let service: LoggerImplConsole;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerImplConsole);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
