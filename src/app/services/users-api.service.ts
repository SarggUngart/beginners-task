import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserI} from "src/app/interface/userI";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  url: string = 'https://jsonplaceholder.typicode.com/users'
  users!: Observable<UserI[]>

  private readonly http = inject(HttpClient)

  getUsers() {
    return this.http.get<UserI[]>(this.url)
  }

  getUserById(id: number): Observable<UserI> {
    const userUrl = `${this.url}/${id}`
    return this.http.get<UserI>(userUrl)
  }

}
