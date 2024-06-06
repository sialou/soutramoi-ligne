import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalisationComponent } from './personnalisation.component';

describe('PersonnalisationComponent', () => {
  let component: PersonnalisationComponent;
  let fixture: ComponentFixture<PersonnalisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnalisationComponent]
    });
    fixture = TestBed.createComponent(PersonnalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
