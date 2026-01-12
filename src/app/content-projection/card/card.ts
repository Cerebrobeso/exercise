import { Component } from '@angular/core';
import {HlmCard, HlmCardImports} from '@spartan-ng/helm/card';

@Component({
  selector: 'app-card',
  imports: [
    HlmCard,
    HlmCardImports
  ],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

}
