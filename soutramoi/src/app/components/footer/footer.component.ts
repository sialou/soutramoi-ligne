import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  newsletterForm: FormGroup = new FormGroup({
    email:new FormControl('')

  });
  formSubmitted: boolean = false;
  formInvalid: boolean = false;
  constructor(private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder){ }
  ngOnInit(): void {
    this.newsletterForm= this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


   async onSubmit() {

    this.formInvalid = false; // Reset invalid state
    if (this.newsletterForm.valid) {

      const formData = this.newsletterForm.value;
       emailjs.init('R1YF4paGYeuHKRWxf');
      let response = await emailjs.send("service_l2tmp06","template_6m5ihd4",{
        from_name: "Soutramoi",
        to_name: "Newsletter",
        from_email: this.newsletterForm.value.email,
        subject: "Newsletter_subject",
        message: "Newsletter_message",
        });

        this.formSubmitted = true;
          this.newsletterForm.reset();

      /*this.http.post('http://localhost:3000/send-email', {
        email: 'floraskouassi@hotmail.fr',
        subject: 'Form Submission',
        message: `Form Submitted with data: ${JSON.stringify(formData)}`
      }).subscribe({
        next: response => {
          console.log('Email sent successfully', response);
          this.formSubmitted = true;
          this.newsletterForm.reset();
        },
        error: error => {
          console.error('Error sending email', error);
          this.formInvalid = true;
        },
        complete: () => {
          console.log('Request completed');
        }
      });*/
    } else {
      this.formInvalid = true;
      console.log('Request incompleted');
    }
  }



}
