import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateHomePageComponent } from './animate-home-page.component';

describe('AnimateHomePageComponent', () => {
  let component: AnimateHomePageComponent;
  let fixture: ComponentFixture<AnimateHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimateHomePageComponent]
    });
    fixture = TestBed.createComponent(AnimateHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
