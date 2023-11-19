import {Component, Input} from '@angular/core';
import {UserI} from "src/app/interface/userI";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() usersLength!: number ;
}
