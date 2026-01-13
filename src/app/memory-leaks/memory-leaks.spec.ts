import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLeaks } from './memory-leaks';

describe('MemoryLeaks', () => {
  let component: MemoryLeaks;
  let fixture: ComponentFixture<MemoryLeaks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryLeaks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryLeaks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
