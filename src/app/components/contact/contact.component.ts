import { Component, Output, EventEmitter } from '@angular/core';
import { ContactFormData } from 'src/models/form-data.models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Output() public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>();

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
    this.sendForm.emit(this.formData)
  }

  public showInputData(event: any): void{
    console.log(event.target.value)
  }
}
