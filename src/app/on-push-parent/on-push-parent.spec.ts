import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushParent } from './on-push-parent';

describe('OnPushParent', () => {
  let component: OnPushParent;
  let fixture: ComponentFixture<OnPushParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnPushParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
