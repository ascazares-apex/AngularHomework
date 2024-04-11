import { Injectable } from '@angular/core';
import { InjectablesProviderModule } from '../modules/injectables-provider/injectables-provider.module';

@Injectable({
  providedIn: InjectablesProviderModule
})
export class ModuleProvidersInjectableService {
  public wordsList: string[] = ["one", "two"];
  constructor() { }
}
