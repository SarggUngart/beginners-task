import {Component, OnInit } from '@angular/core';
import {UsersApiService} from "src/app/services/users-api.service";
import {map, Observable, tap} from "rxjs";
import {UserI} from "src/app/interface/userI";

@Component({
  selector: 'app-feature-users-list',
  templateUrl: './feature-users-list.component.html',
  styleUrls: ['./feature-users-list.component.scss']
})
export class FeatureUsersListComponent implements OnInit {
  isLoading = false
  users$!: Observable<UserI[]>;

  constructor(public usersApi: UsersApiService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.users$ = this.usersApi.getUsers().pipe(tap(() => this.isLoading = false))
  }

  deleteUser(id: number) {
    this.usersApi.deleteUserById(id)
  }

  onSearch(searchTerm: string) {
    this.users$ = this.usersApi.getUsers().pipe(
      map(
        data => data
          .filter(user =>
            user.name.firstname.toLowerCase()
              .includes(searchTerm.toLowerCase())
            || user.name.lastname.toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
      )
    )
  }
}

