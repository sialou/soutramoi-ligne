import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPrestataireComponent } from './signup-prestataire.component';

describe('SignupPrestataireComponent', () => {
  let component: SignupPrestataireComponent;
  let fixture: ComponentFixture<SignupPrestataireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupPrestataireComponent]
    });
    fixture = TestBed.createComponent(SignupPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
