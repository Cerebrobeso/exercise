import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactIntegration } from './react-integration';

describe('ReactIntegration', () => {
  let component: ReactIntegration;
  let fixture: ComponentFixture<ReactIntegration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactIntegration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactIntegration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
