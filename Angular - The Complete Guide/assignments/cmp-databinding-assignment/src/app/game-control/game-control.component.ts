import { Component, Input, OnInit, Output } from '@angular/core';
import { timeout } from 'rxjs-compat/operator/timeout';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('increment') increment =  0;
  // increment =  0;
  timerId = setTimeout(() => {}, 0)
  constructor() {
    console.log(this.increment)
   }

  startEvent(){
    this.timerId = setInterval(() => {
      this.increment++;
      console.log(this.increment); 
    }, 1000);
    
  }

  stopEvent(){
    console.log("STOPPED")
    clearInterval(this.timerId)

  }
  ngOnInit(): void {
  }

}
