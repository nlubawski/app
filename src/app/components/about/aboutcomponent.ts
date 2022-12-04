import { AboutSectionData } from './../../../models/about-section-data';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() public aboutData!: AboutSectionData;


}
