import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];
  // countEvent: Event;
  counts: number;

  constructor(private counterService: CounterService){
    this.counts = counterService.counter;
  }

  getCounts() {
    this.counts = this.counterService.getCount();
  }
  // onCounter(counter: CounterService){
  //   this.countEvent = counter.getCount();
  // }
  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  //   // this.counter.addCount();
  //   this.counts = this.counter.counter;
  //   console.log(this.counter.counter)
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  //   // this.counter.addCount();
  //   this.counts = this.counter.counter;
  //   console.log(this.counter.counter)
  // }
}
