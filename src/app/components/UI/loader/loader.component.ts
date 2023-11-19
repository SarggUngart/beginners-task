import {Component, Input} from '@angular/core';
import {UserI} from "src/app/interface/userI";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() isLoading!:boolean
  @Input() user$?:UserI
}
