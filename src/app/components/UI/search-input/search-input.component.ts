import {Component, EventEmitter, Output} from '@angular/core';
import {UsersApiService} from "src/app/services/users-api.service";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  constructor(public usersApi: UsersApiService) {
  }

  search() {
    this.searchEvent.emit(this.searchTerm);
  }

  clear() {
    this.searchTerm = ''
  }

}
