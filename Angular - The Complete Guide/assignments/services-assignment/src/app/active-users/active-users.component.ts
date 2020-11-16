import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountManagerService } from '../account-manager.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  activeUsers: string[];
  constructor(private accountManager: AccountManagerService){
    this.activeUsers = accountManager.activeUsers
  }
  onSetToInactive(id: number) {
    this.accountManager.accountToInactive(id)
  }
}
