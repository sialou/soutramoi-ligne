import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeintreComponent } from './peintre.component';

describe('PeintreComponent', () => {
  let component: PeintreComponent;
  let fixture: ComponentFixture<PeintreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeintreComponent]
    });
    fixture = TestBed.createComponent(PeintreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
