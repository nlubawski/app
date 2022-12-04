import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/aboutcomponent';
import { FeaturesComponent } from './components/features/features.component';
import { AddressComponent } from './components/address/address.component';
import { ButtontopComponent } from './components/buttontop/buttontop.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ContactComponent,
    AboutComponent,
    FeaturesComponent,
    AddressComponent,
    ButtontopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
