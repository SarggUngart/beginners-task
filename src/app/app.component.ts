import {Component, OnInit} from '@angular/core';
import {UserI} from "src/app/interface/userI";
import {UsersApiService} from "src/app/services/users-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title:string = 'Users'
}

