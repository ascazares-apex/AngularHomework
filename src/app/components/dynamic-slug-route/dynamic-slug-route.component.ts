import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-dynamic-slug-route',
  templateUrl: './dynamic-slug-route.component.html',
  styleUrl: './dynamic-slug-route.component.scss'
})
export class DynamicSlugRouteComponent implements AfterViewInit {
  protected slug!: string;

  public constructor(
    public readonly activatedRoute: ActivatedRoute
  ) {}

  public ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.slug = params['slug'];
    });
  }
}
