import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuisierieComponent } from './menuisierie.component';

describe('MenuisierieComponent', () => {
  let component: MenuisierieComponent;
  let fixture: ComponentFixture<MenuisierieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuisierieComponent]
    });
    fixture = TestBed.createComponent(MenuisierieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
