import { ServiceC } from 'src/app/modules/service';
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  /*email: FormControl = new FormControl();
  message: FormControl = new FormControl();
  contactObj: any ={
    email:'',
    message:''
  }*/
  contactForm: FormGroup = new FormGroup({
    email:new FormControl(''),
    message:new FormControl('')

  });
  formSubmitted: boolean = false;
  formInvalid: boolean = false;
  constructor(private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder){ }

  get message(): any{
    return this.contactForm.get('message');
   }
   get email(): any{
    return this.contactForm.get('email');
   }

   ngOnInit(): void {
    this.contactForm= this.fb.group({
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  async onSubmit() {

    this.formInvalid = false; // Reset invalid state
    if (this.contactForm.valid) {

      const formData = this.contactForm.value;
       emailjs.init('R1YF4paGYeuHKRWxf');
      let response = await emailjs.send("service_l2tmp06","template_6m5ihd4",{
        from_name: "Soutramoi",
        to_name: "Contact",
        from_email: this.contactForm.value.email,
        subject: "Contact_subject",
        message: this.contactForm.value.message,
        });

        this.formSubmitted = true;
          this.contactForm.reset();

    } else {
      this.formInvalid = true;
      console.log('Request incompleted');
    }
  }
}
