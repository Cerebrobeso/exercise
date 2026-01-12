import { Component, computed, effect, signal } from '@angular/core';
import { BehaviorSubject, interval, map, Subject, takeUntil, tap, timer } from 'rxjs';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-timer',
  imports: [HlmButtonImports],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  private days = computed(() => Math.floor(this.elapsedTime() / 86400).toString());
  private hours = computed(() =>
    Math.floor((this.elapsedTime() / 3600) % 24)
      .toString()
      .padStart(2, '0'),
  );
  private minutes = computed(() =>
    (Math.floor(this.elapsedTime() / 60) % 60).toString().padStart(2, '0'),
  );
  private seconds = computed(() => (this.elapsedTime() % 60).toString().padStart(2, '0'));

  public pauseTimer$ = signal(true);
  private elapsedTime = signal(0);
  private timer = interval(1000).pipe(tap(() => this.elapsedTime.update((value) => value + 1)));
  private timer$: any;

  public time = computed(() => `${this.days()} ${this.days() === '1' ? 'day': 'days'} ${this.hours()}:${this.minutes()}:${this.seconds()}`);

  constructor() {}

  public startTimer() {
    this.pauseTimer$.set(false);
    this.timer$ = this.timer.subscribe();
  }

  public pauseTimer() {
    if (this.timer$) this.timer$.unsubscribe();
    this.pauseTimer$.set(true);
  }

  public stopTimer() {
    this.timer$.unsubscribe();
    this.pauseTimer$.set(true);
    this.elapsedTime.set(0);
  }
}
