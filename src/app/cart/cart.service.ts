import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, map, of, shareReplay, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http = inject(HttpClient);

  public loader = signal(false);
  private products = this.getProducts();
  public products$ = toSignal(this.products, {
    initialValue: []
  });

  private cartItems = signal<Product[]>([]);
  public cartItems$ = this.cartItems.asReadonly();

  constructor() {}

  getProducts() {
    this.loader.set(true);
    return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      map(products => products.map(product => ({...product, quantity: 0}))),
      tap(() => this.loader.set(false)),
      catchError(() => of<Product[]>([])),
      shareReplay({ bufferSize: 1, refCount: true})
    );
  }

  addToCart(product: Product) {
    this.cartItems.update((items) => {
      const item = items.find(el => product.id === el.id);
      if (!item) {
        product.quantity = 1;
        return [...items, product];
      }
      return items.map(el => (el.id === product.id ? {...el, quantity: el.quantity + 1} : el));
    });
  }

  removeFromCart(product: Product) {
    this.cartItems.update((items) => items.filter(el => el.id !== product.id));
  }

  editQuantity(product: Product, quantity: number) {
    this.cartItems.update((items) => {
      if (quantity <= 0) return items.filter(el => el.id !== product.id);

      return items.map(el => (el.id === product.id ? {...el, quantity} : el))
    });
  }

  clearCart() {
    this.cartItems.set([]);
  }
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}
