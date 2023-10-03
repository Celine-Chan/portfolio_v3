import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Curves1Component } from './curves1.component';

describe('Curves1Component', () => {
  let component: Curves1Component;
  let fixture: ComponentFixture<Curves1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Curves1Component]
    });
    fixture = TestBed.createComponent(Curves1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
