import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HlmNavigationMenuImports} from '@spartan-ng/helm/navigation-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmNavigationMenuImports, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exam');
}
