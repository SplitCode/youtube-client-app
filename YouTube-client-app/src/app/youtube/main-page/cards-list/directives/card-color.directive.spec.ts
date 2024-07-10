import { ElementRef, Renderer2 } from '@angular/core';

import { CardColorDirective } from './card-color.directive';

describe('CardColorDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef;
    const renderer2Mock = {} as Renderer2;

    const directive = new CardColorDirective(elementRefMock, renderer2Mock);
    expect(directive).toBeTruthy();
  });
});
