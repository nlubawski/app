import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() public sendSearch: EventEmitter<string> =
    new EventEmitter<string>();

  public valueSearch = '';

  public submitSearch(): void {
    this.sendSearch.emit(this.valueSearch);
  }

  public getSearch(event: any): void {
    this.valueSearch = event.target.value;
  }
}
