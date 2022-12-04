import { AboutSectionData } from './../../../models/about-section-data';
import { Component, Input } from '@angular/core';
import { AddressData } from 'src/models/address-data.models';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input() public addressData! : AddressData;

}
