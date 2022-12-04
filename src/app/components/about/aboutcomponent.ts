import { AboutSectionData } from './../../../models/about-section-data';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  @Input() public aboutData!: AboutSectionData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(){
    this.elementCreated.emit('About')
  }

}
