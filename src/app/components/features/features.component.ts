import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeaturesSectionData } from 'src/models/feactures-section-data.models';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  @Input() public featureData!: FeaturesSectionData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(){
    this.elementCreated.emit('Feature')
  }
}
