/*import { BorderCardDirective } from './border-card.directive';

describe('BorderCardDirective', () => {
  it('should create an instance', () => {
    const directive = new BorderCardDirective();
    expect(directive).toBeTruthy();
  });
});*/

import { TestBed } from '@angular/core/testing';
import { BorderCardDirective } from './border-card.directive';
import { ElementRef } from '@angular/core';

describe('BorderCardDirective', () => {
  it('should create an instance', () => {
    // Create a TestBed configuration
    TestBed.configureTestingModule({
      declarations: [BorderCardDirective],
    });

    // Use TestBed to create an instance of the directive
    const fixture = TestBed.createComponent(BorderCardDirective);
    const directive = fixture.componentInstance;

    // Pass a mock ElementRef to the constructor
    const mockElementRef = new ElementRef(null);
    directive.constructor(mockElementRef);

    // Now, you can expect the directive to be truthy
    expect(directive).toBeTruthy();
  });
});
