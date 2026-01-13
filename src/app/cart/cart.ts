import {Component, computed, effect, inject, Pipe, PipeTransform} from '@angular/core';
import {HlmIcon} from "@spartan-ng/helm/icon";
import {
  HlmItem,
  HlmItemContent,
  HlmItemDescription,
  HlmItemImports,
  HlmItemMedia,
  HlmItemTitle
} from "@spartan-ng/helm/item";
import {NgIcon, provideIcons} from "@ng-icons/core";
import {CartService, Product} from './cart.service';
import {HlmSpinnerImports} from '@spartan-ng/helm/spinner';
import {lucideHandbag, lucideLoader, lucideMinus, lucidePlus, lucideShoppingCart, lucideTrash} from '@ng-icons/lucide';
import {HlmButtonImports} from '@spartan-ng/helm/button';
import {NgOptimizedImage} from '@angular/common';
import {HlmPopoverImports} from '@spartan-ng/helm/popover';
import {BrnPopoverContent} from '@spartan-ng/brain/popover';
import {HlmInputGroupImports} from '@spartan-ng/helm/input-group';
import {HlmAlertDialogImports} from '@spartan-ng/helm/alert-dialog';
import {BrnAlertDialogContent} from '@spartan-ng/brain/alert-dialog';

@Pipe({
  name: 'euroCurrency', standalone: true
})
export class EuroCurrencyPipe implements PipeTransform {
  transform(value: number | null | undefined, locale: string = 'it-IT', currency: string = 'EUR', minimumFractionDigits: number = 2, maximumFractionDigits: number = 2): string {
    if (value == null) {
      return '';
    }

    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits
    });

    return formatter.format(value);
  }
}

@Component({
  selector: 'app-cart',
  imports: [HlmIcon, HlmItem, HlmItemContent, HlmItemDescription, HlmItemMedia, HlmItemTitle, NgIcon, HlmSpinnerImports, HlmItemImports, HlmButtonImports, NgOptimizedImage, HlmPopoverImports, BrnPopoverContent, HlmInputGroupImports, EuroCurrencyPipe, HlmAlertDialogImports, BrnAlertDialogContent],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  providers: [provideIcons({lucideHandbag, lucideLoader, lucideShoppingCart, lucideMinus, lucidePlus, lucideTrash})],
})
export class Cart {
  private service = inject(CartService);
  private vat = 0.22;

  cartItemsCount = computed(() => this.cartItems$().map(item => item.quantity).reduce((a, b) => a + b, 0));
  cartItemsCountText = computed(() => this.cartItemsCount() > 0 ? `(${this.cartItemsCount()} item${this.cartItemsCount() > 1 ? 's' : ''})` : '(No items)');
  cartItemsTotal = computed(() => {
    let total = 0;
    this.cartItems$().forEach(item => total += (item.price * item.quantity));
    return total;
  })
  products$ = this.service.products$;
  loader$ = this.service.loader;
  cartItems$ = this.service.cartItems$;
  shippingCost = computed(() => this.cartItemsCount() > 0 ? 4.99 : 0);
  tax = computed(() => (this.cartItemsTotal() * this.vat));
  total = computed(() => this.cartItemsTotal() + this.tax() + this.shippingCost());

  constructor() {
    effect(() => {
      console.log(this.cartItems$());
    });
  }

  addToCart(product: Product) {
    this.service.addToCart(product);
  }

  decrement(product: Product) {
    const quantity = product.quantity - 1;
    this.service.editQuantity(product, quantity);
  }

  increment(product: Product) {
    const quantity = product.quantity + 1;
    this.service.editQuantity(product, quantity);
  }

  onInput(product: Product, event: Event) {
    const input = event.target as HTMLInputElement;
    let quantity = parseInt(input.value);
    if (quantity <= 0) quantity = 1;
    this.service.editQuantity(product, quantity);
  }

  removeFromCart(product: Product) {
    this.service.removeFromCart(product);
  }

  clearCart() {
    this.service.clearCart();
  }
}
