import { Component, OnInit } from '@angular/core';
import { RootInjectableService } from '../../services/root-injectable.service';

@Component({
  selector: 'app-root-injectable-user2',
  templateUrl: './root-injectable-user2.component.html',
  styleUrl: './root-injectable-user2.component.scss'
})
export class RootInjectableUser2Component implements OnInit {
  public serviceData!: string;

  constructor(private readonly rootInjectable: RootInjectableService) { }
  
  ngOnInit(): void {
    this.serviceData = this.rootInjectable.persistentData;
  }
}
