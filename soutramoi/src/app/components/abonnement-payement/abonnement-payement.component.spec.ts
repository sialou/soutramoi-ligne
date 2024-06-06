import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementPayementComponent } from './abonnement-payement.component';

describe('AbonnementPayementComponent', () => {
  let component: AbonnementPayementComponent;
  let fixture: ComponentFixture<AbonnementPayementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbonnementPayementComponent]
    });
    fixture = TestBed.createComponent(AbonnementPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
