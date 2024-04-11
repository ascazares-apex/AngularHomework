import { Component, OnInit } from '@angular/core';
import { RootInjectableService } from '../../services/root-injectable.service';


@Component({
  selector: 'app-root-injectable-user1',
  templateUrl: './root-injectable-user1.component.html',
  styleUrl: './root-injectable-user1.component.scss'
})
export class RootInjectableUser1Component implements OnInit {
  public serviceData!: string;

  constructor(private readonly rootInjectable: RootInjectableService) { }

  ngOnInit(): void {
    this.serviceData = this.rootInjectable.persistentData;
  }
}
