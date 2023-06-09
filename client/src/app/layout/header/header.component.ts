import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() sidebarOpen:boolean = true;
  @Output() sidebarOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  menuClick() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarOpenChange.emit(this.sidebarOpen)
  }
}
