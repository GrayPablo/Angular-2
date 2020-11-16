import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .myClass {
      background-color: blue;
      color: white;
    }
  `]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayed = false
  clicks = 0
  backgroundColor = ''
  constructor(){
  }

  onIncrementClick(){
    this.displayed = !this.displayed
    this.clicks++
    console.log("Number of clicks is " + this.clicks)
  }

  // getBackground(){
  //   this.clicks >= 5 ? ''
  // }
}
