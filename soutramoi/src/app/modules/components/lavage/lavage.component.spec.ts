import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavageComponent } from './lavage.component';

describe('LavageComponent', () => {
  let component: LavageComponent;
  let fixture: ComponentFixture<LavageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LavageComponent]
    });
    fixture = TestBed.createComponent(LavageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
