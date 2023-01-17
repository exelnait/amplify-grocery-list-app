import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {
  @Output() onSignOut = new EventEmitter<void>();
}
