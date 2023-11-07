import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserI} from "src/app/interface/userI";
import {UsersApiService} from "src/app/services/users-api.service";

@Component({
  selector: 'app-feature-users-list',
  templateUrl: './feature-users-list.component.html',
  styleUrls: ['./feature-users-list.component.scss']
})
export class FeatureUsersListComponent {
  users!: UserI[]

  constructor(public usersApi: UsersApiService) {
  }

  ngOnInit(): void {
    this.usersApi.getUsers().subscribe(users => {
      this.users = users
    })
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id)
  }
}

