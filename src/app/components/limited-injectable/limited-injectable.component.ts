import { Component, OnInit } from '@angular/core';
import { ModuleProvidersInjectableService } from '../../services/module-providers-injectable.service';

@Component({
  selector: 'app-limited-injectable',
  templateUrl: './limited-injectable.component.html',
  styleUrl: './limited-injectable.component.scss'
})
export class LimitedInjectableComponent implements OnInit {
  public words!: string[];

  constructor(private readonly injectableService: ModuleProvidersInjectableService) { }

  ngOnInit(): void {
    this.words = this.injectableService.wordsList;
  }
}
