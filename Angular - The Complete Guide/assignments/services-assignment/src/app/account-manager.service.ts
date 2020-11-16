import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class AccountManagerService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counter: CounterService){}

    accountToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counter.addCount()
        this.counter.counterEvent.emit(this.counter.counter)
      }
    
    accountToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counter.addCount()
        this.counter.counterEvent.emit(this.counter.counter)
      }
}