import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter = 10;
  counterSignal = signal(10);
  constructor() {
    this.counter = 0;
  }
  increment() {
    this.counter++;
    this.counterSignal.update((currentValue) => currentValue + 1);
  }
  decrement() {
    this.counter--;
    this.counterSignal.update((currentValue) => currentValue - 1);
  }
  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
