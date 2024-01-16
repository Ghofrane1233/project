import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inde1Component } from './inde1.component';

describe('Inde1Component', () => {
  let component: Inde1Component;
  let fixture: ComponentFixture<Inde1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Inde1Component]
    });
    fixture = TestBed.createComponent(Inde1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
