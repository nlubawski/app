import { ContactFormData } from './../models/form-data.models';
import { Component } from '@angular/core';
import { AppData } from 'src/models/app-data.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data: AppData = {
    features: {
      sectionTitle: 'Destaques',
      feature1: {
        image: 'feature1.png',
        title: 'Destaque 1',
        text: 'nnn nnn llll asas aadsd ff ege gngneng gegeg e geg ggegg ggg',
      },
      feature2: {
        image: 'feature2.png',
        title: 'Destaque 2',
        text: 'nnn nnn llll asas aadsd ff ege gngneng gegeg e geg ggegg ggg',
      },
      feature3: {
        image: 'feature3.png',
        title: 'Destaque 3',
        text: 'nnn nnn llll asas aadsd ff ege gngneng gegeg e geg ggegg ggg',
      },
      feature4: {
        image: 'feature4.png',
        title: 'Destaque 4',
        text: 'nnn nnn llll asas aadsd ff ege gngneng gegeg e geg ggegg ggg',
      },
    },
    about: {
      sectionTitle: 'Sobre a empresa',
      text: `nnn nnn llll asas aadsd ff ege gngneng gegeg e geg ggegg ggg
      nnn nnn llll asas aadsd ff ege gngneng gegeg e geg ggegg ggg
      nnn nnn llll asas aadsd ff ege gngneng gegeg e geg ggegg ggg
      nnn nnn llll asas aadsd ff ege gngneng gegeg e geg ggegg ggg
      nnn nnn llll asas aadsd ff ege gngneng gegeg e geg ggegg ggg
      v`,
    },
    address: {
      sectionTitle: 'Endereço',
      data: {
        street: 'Rua tal',
        number: 234,
        complement: '3 andar',
        state: 'AC',
        city: 'rio branco',
        district: 'conjunto castelo branco',
        zipCode: '69911-262',
      },
    },
  };

  onElementCreated(element: string): void {
    console.log('Elemento criado: ', element);
  }

  onContactFormSubmitted(formData: ContactFormData): void {
    console.log('Formulario enviado com sucesso', formData);
  }

  onSearchFormSubmitted(search: string): void {
    console.log('Você pesquisou', search);
  }
}
