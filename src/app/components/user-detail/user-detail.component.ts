import {Component, OnInit} from '@angular/core';
import {UserI} from "src/app/interface/userI";
import {UsersApiService} from "src/app/services/users-api.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user!: UserI
  isLoading: boolean = true

  constructor(private userService: UsersApiService,
              private location: Location,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getUser()

  }

  getUser(): void {
    this.isLoading = true
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.userService.getUserById(id).subscribe(user => {
      this.user = user
      this.isLoading = false
    })
  }

  goBack(): void {
    this.location.back();
  }
}


