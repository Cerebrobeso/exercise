import {AfterViewInit, ChangeDetectorRef, Component, inject} from '@angular/core';
import {ExercisePipe} from './exercise-pipe';

@Component({
  selector: 'app-exercise',
  imports: [
    ExercisePipe
  ],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css',
})
export class Exercise implements AfterViewInit {
  private cdr = inject(ChangeDetectorRef);
  array = ['Ancona', 'Empoli', 'Aria', 'Belgio']

  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.array.push('Ascoli', 'Aria');
      console.log(this.array)
      this.cdr.detectChanges();
    }, 4000)

  }
}
