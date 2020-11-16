import { EventEmitter } from "@angular/core";

export class CounterService {
  counterEvent = new EventEmitter<number>();
  counter: number = 0;

    addCount(){
      this.counter++;
      console.log("In counter is " + this.counter)
    }
    getCount(){
      return this.counter;
    }
}