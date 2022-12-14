import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressData } from 'src/models/address-data.models';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input() public addressData! : AddressData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(){
    this.elementCreated.emit('Address')
  }
}
