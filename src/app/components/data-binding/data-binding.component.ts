import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  public bindingText: string = "Hello world";

  public displayAlert(): void {
    alert("I was triggered by an event");
  }
}
