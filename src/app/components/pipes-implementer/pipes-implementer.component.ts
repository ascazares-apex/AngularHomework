import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-implementer',
  templateUrl: './pipes-implementer.component.html',
  styleUrl: './pipes-implementer.component.scss'
})
export class PipesImplementerComponent {
  public amount: number = 34.22;
  public greetings: string = "HELLO World!";
}
