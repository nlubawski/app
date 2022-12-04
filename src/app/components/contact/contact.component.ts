import { Component } from '@angular/core';
import { ContactFormData } from 'src/models/form-data.models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public btnDisable = true;
  public formData: ContactFormData = {
    email: "teste@teste.com",
    message: "Hello World"
  }

  ngOnInit(){
    setTimeout(() => {
      this.btnDisable = false;
    }, 3000)
  }

  public submitForm(): void {
    console.log("enviadoo")
    console.log(this.formData)
  }

  public showInputData(event: any): void{
    console.log(event.target.value)
  }
}
