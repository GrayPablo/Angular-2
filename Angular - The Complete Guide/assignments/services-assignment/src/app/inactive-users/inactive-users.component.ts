import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountManagerService } from '../account-manager.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  inactiveUsers: string[];
  constructor(private accountManager: AccountManagerService){
    this.inactiveUsers = [] = accountManager.inactiveUsers
  }

  onSetToActive(id: number) {
    this.accountManager.accountToActive(id)
  }
}
