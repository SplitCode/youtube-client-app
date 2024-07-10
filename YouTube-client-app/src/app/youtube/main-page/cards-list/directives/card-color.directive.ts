import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

enum CardColors {
  blue = '#2f80ed',
  green = '#27ae60',
  yellow = '#f2c94c',
  red = '#eb5757'
}

@Directive({
  selector: '[appCardColor]',
  standalone: true,
})
export class CardColorDirective implements AfterViewInit {
  @Input('appCardColor') date!: string;

  constructor(
    private elementRef: ElementRef,
    private render2: Renderer2,
  ) {}

  ngAfterViewInit() {
    const dateStatus = CardColorDirective.countDateStatusAfterPublish(this.date);
    const setColor = (color: string) => this.render2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      color,
    );

    if (dateStatus <= 7) setColor(CardColors.blue);
    else if (dateStatus <= 30) setColor(CardColors.green);
    else if (dateStatus <= 180) setColor(CardColors.yellow);
    else setColor(CardColors.red);
  }

  private static countDateStatusAfterPublish(date: string): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const publishDate = new Date(date).getTime();
    const today = Date.now();
    return Math.floor((today - publishDate) / oneDay);
  }
}
