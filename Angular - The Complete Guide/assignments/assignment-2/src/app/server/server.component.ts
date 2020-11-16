import { Component, OnInit} from '@angular/core';
// import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  buttonWorking = true
  userName = 'Perico De Los Palotes';
  constructor() {

   }

  ngOnInit(): void{

  }

  onUpdateUsername(){
    this.userName = (<HTMLInputElement>event.target).value
    this.buttonWorking = true
    if (this.userName.length == 0) {
        this.buttonWorking = false
    }
    console.log(this.userName)
    console.log(this.userName.length)
  }

  resetNameVal(){
    this.userName = ''
  }
}
