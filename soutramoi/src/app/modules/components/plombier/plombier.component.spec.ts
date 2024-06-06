import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlombierComponent } from './plombier.component';

describe('PlombierComponent', () => {
  let component: PlombierComponent;
  let fixture: ComponentFixture<PlombierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlombierComponent]
    });
    fixture = TestBed.createComponent(PlombierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
