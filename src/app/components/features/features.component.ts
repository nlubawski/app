import { Component, Input } from '@angular/core';
import { FeaturesSectionData } from 'src/models/feactures-section-data.models';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  @Input() public featureData!: FeaturesSectionData;

}
