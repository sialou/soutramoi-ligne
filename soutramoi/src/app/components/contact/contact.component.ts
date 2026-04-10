import { ServiceC } from 'src/app/modules/service';
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormsModule  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DatePipe, CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { WhatsappService } from '../shared/Whatsapp.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  /*email: FormControl = new FormControl();
  message: FormControl = new FormControl();
  contactObj: any ={
    email:'',
    message:''
  }*/
  /*contactForm: FormGroup = new FormGroup({
    email:new FormControl(''),
    message:new FormControl('')

  });
  formSubmitted: boolean = false;
  formInvalid: boolean = false;*/
  constructor(private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder, private whatsapp: WhatsappService){ }

  /*get message(): any{
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
  }*/

  /*new*/

  form = { nom: '', tel: '', sujet: '', quartier: '', message: '' };

  sujets = [
    'Demande de service à domicile',
    'Abonnement climatisation',
    'Devenir prestataire',
    'Problème avec une mission',
    'Remboursement',
    'Autre question',
  ];

  isValid(): boolean {
    return !!(this.form.nom && this.form.tel && this.form.sujet && this.form.message);
  }

  envoyer() {
    if (!this.isValid()) return;
    const msg = `Bonjour Soutramoi 👋\n\n*Nom :* ${this.form.nom}\n*Téléphone :* ${this.form.tel}\n*Sujet :* ${this.form.sujet}\n*Quartier :* ${this.form.quartier || 'Non renseigné'}\n\n*Message :*\n${this.form.message}`;
    this.whatsapp.contact(this.form.sujet, msg);
  }

  waDirecte() { this.whatsapp.open('Bonjour Soutramoi, je souhaite vous contacter.'); }

  urgence() {
    this.whatsapp.open('🚨 URGENCE — Bonjour Soutramoi, j\'ai besoin d\'une intervention urgente : ');
  }
}
