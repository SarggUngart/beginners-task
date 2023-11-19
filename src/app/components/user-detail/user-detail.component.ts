import {Component, inject, Input, OnInit} from '@angular/core';
import {UsersApiService} from "src/app/services/users-api.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {UserI} from "src/app/interface/userI";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user$: Observable<UserI | undefined>
  route: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UsersApiService)

  constructor(private location: Location) {
    this.user$ = this.userService.currentUser$
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.userService.getUserById(userId);
    });
  }

  goBack(): void {
    this.location.back();
  }

}


