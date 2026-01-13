import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Observable, interval, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {LoggerService} from '../../core/services';

@Component({
  selector: 'app-memory-leaks',
  imports: [],
  templateUrl: './memory-leaks.html',
  styleUrl: './memory-leaks.css',
})
export class MemoryLeaks implements OnInit, OnDestroy{
  private logger = inject(LoggerService);
  private interval: number = 0;
  private intervalObs = interval(1000).pipe(
      tap(() => this.logger.log('observable')),
      takeUntilDestroyed()
    );

  constructor() {
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.logger.log('timeout')
    }, 1000);

    this.intervalObs.subscribe();
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
