import { ServiceC } from 'src/app/modules/service';
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import emailjs from '@emailjs/browser';
import { WhatsappService } from '../shared/Whatsapp.service';
declare var M: any;
@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent  {

  abonnementForm: FormGroup = new FormGroup({
    type_abonnement:new FormControl(''),
    service:new FormControl(''),
    name: new FormControl(''), // Validator for user_id
    tel: new FormControl(''), // Validator for job_id
  //created_at:new FormControl('')
    /*user_id:new FormControl(''),
    job_id:new FormControl(''),*/

  });
  myDate = new Date();
  formSubmitted: boolean = false;
  formInvalid: boolean = false;
  constructor(private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder,private whatsapp: WhatsappService){ }

  @ViewChild('select1', {static: false}) select1Element: ElementRef;
  @ViewChild('select2', {static: false}) select2Element: ElementRef;

  /*ngAfterViewInit() {
    this.initializeSelect();
  }

  initializeSelect() {

    const options = {}; // Your options for the select initialization

    const select1 = this.select1Element.nativeElement;
    const select2 = this.select2Element.nativeElement;

    M.FormSelect.init(select1, options);
    M.FormSelect.init(select2, options);
  }

  ngOnInit(): void {
    this.abonnementForm= this.fb.group({
      type_abonnement: ['', Validators.required],
      service: ['', Validators.required],
      name: ['', Validators.required],
      tel: ['', Validators.required],

    });
  }*/

  async onSubmit() {

  this.formInvalid = false; // Reset invalid state
  if (this.abonnementForm.valid) {
    const formData = this.abonnementForm.value;
  // Parse 'user_id' and 'job_id' to integers if they are not already

  emailjs.init('R1YF4paGYeuHKRWxf');
  let response = await emailjs.send("service_l2tmp06","template_6m5ihd4",{
    from_name: "Soutramoi",
    to_name: "Abonnement",
    from_email: "",
    subject: "Abonnement_subject",
    message:'type_abonnement'+ this.abonnementForm.value.abonnement +'service'+this.abonnementForm.value.service+'name'+this.abonnementForm.value.name+'tel'+this.abonnementForm.value.tel,
    });
  /*obj.user_id = 3;
  obj.job_id =4;
  obj.created_at = new Date();
  const token = '$2y$12$gyW8pP8GZT1vAF9od6CqfuoHM5SIcccUMFsEEAA79YXJj2U/P66pe'; // Replace 'your_access_token' with your actual access token

  // Set up headers with Authorization token
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  this.http.post('https://www.api.soutramoi.com/api/v1/abonnement', obj, { headers })
    .pipe(
      map((res: any) => {
        alert('Abonnement created');
        return res;
      }),
      catchError((error) => {
        console.error('Error creating abonnement:', error);
        // Handle error appropriately, e.g., show error message to user
        throw error;
      })
    )
    .subscribe();*/
    this.formSubmitted = true;
    this.abonnementForm.reset();

  } else {
    this.formInvalid = true;
    console.log('Request incompleted');
  }
}

/*new*/



  sAbonner() { this.whatsapp.abonnement(); }

  features = [
    { title: '1 nettoyage complet',    desc: 'Filtres, bac à eau, unité intérieure et extérieure.' },
    { title: '1 Contrôle rapide inclus',  desc: '30 min pour vérifier que tout va bien.' },
   /* { title: 'Technicien dédié fixe',           desc: 'Un technicien attitré qui connaît votre installation.' },*/
    { title: 'Intervention garantie sous 24h',  desc: 'Panne urgente ? On envoie quelqu\'un rapidement.' },
    { title: 'Paiement Mobile Money',           desc: 'Orange Money, MTN, Wave ou Moov. Simple et sécurisé.' },
    { title: 'Suivi et rappels WhatsApp',       desc: 'On vous prévient avant chaque passage. Aucun oubli.' },
  ];

  whyItems = [
    { icon: '🌡️', title: 'Abidjan, c\'est chaud toute l\'année', desc: 'Un clim entretenu régulièrement consomme 30% d\'énergie en moins et dure 3× plus longtemps.' },
    { icon: '💸', title: 'Évitez les grosses pannes coûteuses', desc: 'Un nettoyage à 10 000 F évite une réparation à 80 000 F. L\'entretien préventif, c\'est rentable.' },
    { icon: '😌', title: 'Zéro souci, on gère tout', desc: 'Vous recevez un rappel WhatsApp avant chaque passage. Vous n\'avez rien à chercher ni à organiser.' },
  ];

  faqs: { q: string; a: string; open: boolean }[] = [
    { q: 'Combien de climatiseurs sont couverts ?', a: 'L\'abonnement couvre 1 climatiseur. Pour plusieurs clims, contactez-nous via WhatsApp pour un tarif groupe.', open: false },
    { q: 'Que se passe-t-il si mon clim tombe en panne ?', a: 'Les abonnés sont prioritaires. On envoie un technicien sous 24h. Le diagnostic est gratuit, seules les pièces sont facturées si nécessaire.', open: false },
    { q: 'Comment se passe le paiement ?', a: 'Vous payez le montant de l`abonnement  par Mobile Money (Orange, MTN, Wave, Moov). Vous recevez une confirmation WhatsApp dès réception.', open: false },
    { q: 'Puis-je résilier l\'abonnement ?', a: 'Oui, après les 3 premiers mois. Envoyez-nous simplement un message WhatsApp 7 jours avant la prochaine échéance.', open: false },
    { q: 'Quelles marques de clim sont prises en charge ?', a: 'Toutes les marques : Samsung, LG, Midea, Daikin, Panasonic, Haier, Hisense, Gree et autres.', open: false },
  ];

  steps = [
    { title: 'Envoyez-nous un message', desc: 'Cliquez sur "S\'abonner via WhatsApp". Indiquez votre quartier et le type de clim.' },
    { title: 'On vous confirme et planifie', desc: 'On vous répond en moins de 2h avec la date du premier passage et le technicien attitré.' },
    { title: 'Vous payez et on arrive', desc: 'Paiement Mobile Money avant le passage. Le technicien vient, fait le travail, vous validez.' },
  ];
}


