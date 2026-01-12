import { Component } from '@angular/core';
import {Card} from './card/card';
import {HlmButtonImports} from '@spartan-ng/helm/button';
import {HlmLabelImports} from '@spartan-ng/helm/label';
import {HlmInputImports} from '@spartan-ng/helm/input';

@Component({
  selector: 'app-content-projection',
  imports: [
    Card,
    HlmButtonImports,
    HlmLabelImports,
    HlmInputImports
  ],
  templateUrl: './content-projection.html',
  styleUrl: './content-projection.css',
})
export class ContentProjection {

}
