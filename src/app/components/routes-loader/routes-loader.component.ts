import { Component } from '@angular/core';
import { LinkT } from '../../models/link.type';

@Component({
  selector: 'app-routes-loader',
  templateUrl: './routes-loader.component.html',
  styleUrl: './routes-loader.component.scss'
})
export class RoutesLoaderComponent {
  protected links: Array<LinkT> = [
    {
      exact: true,
      label: 'Simple',
      path: 'routes/simple'
    },
    {
      exact: true,
      label: 'Lazy',
      path: 'routes/lazy'
    },
    {
      exact: true,
      label: 'Dynamic (hello)',
      path: 'routes/dynamic/hello'
    },
    {
      exact: true,
      label: 'Dynamic (goodbye)',
      path: 'routes/dynamic/goodbye'
    }
  ]
}
