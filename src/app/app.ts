import {Component, inject, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { HlmNavigationMenuImports } from '@spartan-ng/helm/navigation-menu';
import {LoggerService} from '../core/services';
import {HlmButtonImports} from '@spartan-ng/helm/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmNavigationMenuImports, RouterLink, RouterLinkActive, HlmButtonImports],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('exam');

  constructor() {
    const logger = inject(LoggerService);
    logger.log('App loaded');
  }
}
