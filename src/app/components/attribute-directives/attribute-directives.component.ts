import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {
  public active: boolean = false;

  onButtonClick() {
    this.active = !this.active;
  }
}
