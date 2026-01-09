import {Component, effect, inject} from '@angular/core';
import {HlmInputImports} from '@spartan-ng/helm/input';
import {SearchListService} from './search-list.service';
import {HlmItemImports} from '@spartan-ng/helm/item';
import {HlmIconImports} from '@spartan-ng/helm/icon';
import {HlmButtonImports} from '@spartan-ng/helm/button';
import {provideIcons} from '@ng-icons/core';
import {lucideLoader, lucideUser} from '@ng-icons/lucide';
import {HlmSpinnerImports} from '@spartan-ng/helm/spinner';

@Component({
  selector: 'app-search-list',
  imports: [
    HlmInputImports,
    HlmItemImports,
    HlmIconImports,
    HlmButtonImports,
    HlmSpinnerImports
  ],
  templateUrl: './search-list.html',
  styleUrl: './search-list.css',
  providers: [
    provideIcons({lucideUser, lucideLoader})
  ]
})
export class SearchList {
  private service = inject(SearchListService);

  public users$ = this.service.users$;

  constructor() {
    effect(() => {
      console.log(this.users$());
    });
  }

  setSearch(query: any) {
    this.service.setSearch(query.target.value);
  }

}
