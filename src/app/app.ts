import {Component, inject, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { HlmNavigationMenuImports } from '@spartan-ng/helm/navigation-menu';
import {LoggerService} from '../core/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmNavigationMenuImports, RouterLink, RouterLinkActive],
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
