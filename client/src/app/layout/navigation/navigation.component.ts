import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() sidebarOpen: boolean = true;
  @Output() sidebarOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  menuClick() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarOpenChange.emit(this.sidebarOpen)
  }
}
