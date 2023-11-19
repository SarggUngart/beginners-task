import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserI} from "src/app/interface/userI";
import {BehaviorSubject, catchError, Observable, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  url: string = 'https://fakestoreapi.com/users'
  private readonly http = inject(HttpClient)
  private allUsersSubject = new BehaviorSubject<UserI[]>([]);
  private currentUserSubject = new BehaviorSubject<UserI | undefined>(undefined)
  private allUsers$: Observable<UserI[]> = this.allUsersSubject.asObservable();
  public currentUser$: Observable<UserI | undefined> = this.currentUserSubject.asObservable()

  getUsers(): Observable<UserI[]> {
    const cachedData = this.allUsersSubject.getValue();
    if (cachedData.length > 0) {
      return this.allUsers$
    } else {
      return this.http.get<UserI[]>(this.url)
        .pipe(
          tap(user => {
            this.allUsersSubject.next(user)
          }),
          switchMap(() => {
            return this.allUsersSubject
          }),
          catchError(err => {
            console.error('Error fetching data:', err)
            return []
          })
        )
    }
  }

  deleteUserById(id: number) {
    const filteredUsers = this.allUsersSubject.value.filter(u => u.id !== id)
    this.allUsersSubject.next(filteredUsers);
    console.log(filteredUsers)
  }

  getUserById(id: number) {
    let user = this.allUsersSubject.value.find(u => u.id === id)
    if (user !== undefined) {
      this.currentUserSubject.next(user);
      } else {
      this.http.get<UserI>(`${this.url}/${id}`)
        .subscribe(
          fetchedUser => {
            this.currentUserSubject.next(fetchedUser);
          },
          error => {
            console.error('Error fetching user data:', error);
          }
        );
    }
  }
}
