import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirectiveDirective {
  constructor(private readonly elemRef: ElementRef) {
    elemRef.nativeElement.style.textTransform = "upperCase";
  }

}
