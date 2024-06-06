import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricienComponent } from './electricien.component';

describe('ElectricienComponent', () => {
  let component: ElectricienComponent;
  let fixture: ComponentFixture<ElectricienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricienComponent]
    });
    fixture = TestBed.createComponent(ElectricienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
