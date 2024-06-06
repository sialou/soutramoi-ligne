import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanchisserieComponent } from './blanchisserie.component';

describe('BlanchisserieComponent', () => {
  let component: BlanchisserieComponent;
  let fixture: ComponentFixture<BlanchisserieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlanchisserieComponent]
    });
    fixture = TestBed.createComponent(BlanchisserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
