import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushChild } from './on-push-child';

describe('OnPushChild', () => {
  let component: OnPushChild;
  let fixture: ComponentFixture<OnPushChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
