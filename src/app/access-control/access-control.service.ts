import {computed, inject, Injectable, signal} from '@angular/core';
import {User, UserRole} from '@/src/app/access-control/user.model';
import {delay, map, of} from 'rxjs';
import {LoggerService} from '@/src/core/services';

@Injectable({
  providedIn: 'root',
})
export class AccessControlService {
  private logger = inject(LoggerService);
  // Stato interno (privato)
  private currentUserSignal = signal<User | null>(null);

  // Esponi solo in lettura
  public currentUser = this.currentUserSignal.asReadonly();

  public loader = signal(false);

  // Computed per verifiche rapide
  public isAuthenticated = computed(() => this.currentUser() !== null);
  public isAdmin = computed(() => this.currentUser()?.role === UserRole.ADMIN);
  public isUser = computed(() => this.currentUser()?.role === UserRole.USER);
  public isGuest = computed(() => this.currentUser()?.role === UserRole.GUEST);

  // Database fake di utenti
  private mockUsers: User[] = [
    { id: 1, username: 'admin', email: 'admin@test.com', role: UserRole.ADMIN },
    { id: 2, username: 'user', email: 'user@test.com', role: UserRole.USER },
    { id: 3, username: 'guest', email: 'guest@test.com', role: UserRole.GUEST }
  ];

  // Simula login
  login(username: string, password: string) {
    // Simula chiamata API con delay
    this.loader.set(true);
    return of(null).pipe(
      delay(500), // Simula latenza rete
      map(() => this.mockUsers.find(u => u.username === username))
    ).subscribe((user) => {
      if (user && password === 'prova1234') {
        this.currentUserSignal.set(user);
        this.logger.log(`✅ Login effettuato come ${user.role}`);
        this.logger.toastSuccess(`Login effettuato come ${user.role}`);
      } else {
        this.logger.error('❌ Credenziali non valide');
        this.logger.toastError('Credenziali non valide');
      }
      this.loader.set(false);
    });
  }

  // Logout
  logout() {
    this.currentUserSignal.set(null);
    console.log('👋 Logout effettuato');
  }

  // Quick login per testing (senza password)
  quickLogin(role: UserRole) {
    const user = this.mockUsers.find(u => u.role === role);
    if (user) {
      this.currentUserSignal.set(user);
    }
  }
}
