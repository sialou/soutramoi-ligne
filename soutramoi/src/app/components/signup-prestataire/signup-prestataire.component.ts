import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import emailjs from '@emailjs/browser';
import { WhatsappService } from '../shared/Whatsapp.service';

declare var M: any;
@Component({
  selector: 'app-signup-prestataire',
  templateUrl: './signup-prestataire.component.html',
  styleUrls: ['./signup-prestataire.component.css']
})
export class SignupPrestataireComponent {

  signupPrestataireForm: FormGroup = new FormGroup({
    name:new FormControl(''),
    service:new FormControl(''),
    experience:new FormControl(''),
    ville:new FormControl(''),
    commune:new FormControl(''),
    tel:new FormControl(''),
    condition:new FormControl('')


  });
  formSubmitted: boolean = false;
  formInvalid: boolean = false;

  constructor(private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder, private whatsapp: WhatsappService){ }
  @ViewChild('select1', {static: false}) select1Element: ElementRef;
  ngAfterViewInit() {
    this.initializeSelect();
  }
  initializeSelect() {

    const options = {}; // Your options for the select initialization

    const select1 = this.select1Element.nativeElement;

    M.FormSelect.init(select1, options);
  }
  ngOnInit(): void {
    this.signupPrestataireForm = this.fb.group({
      name: ['', Validators.required],
      service: ['', Validators.required],
      ville: ['', Validators.required],
      commune: ['', Validators.required],
      tel: ['', Validators.required],
      experience: ['', Validators.required],
      condition: ['', Validators.required]


     // email: ['', [Validators.required, Validators.email]]
    });
  }
  async onSubmit() {

    this.formInvalid = false; // Reset invalid state
    if (this.signupPrestataireForm.valid) {

      const formData = this.signupPrestataireForm.value;
       emailjs.init('R1YF4paGYeuHKRWxf');
      let response = await emailjs.send("service_l2tmp06","template_6m5ihd4",{
        from_name: this.signupPrestataireForm.value.name,
        to_name: "Prestataire",
        from_email: " ",
        subject: "Prestataire_subject",
        message:'Service : ' +this.signupPrestataireForm.value.service +'Ville : ' +this.signupPrestataireForm.value.ville +'Commune :'+this.signupPrestataireForm.value.commune+ 'Teléphone :'+this.signupPrestataireForm.value.tel  +'Experience : '+ this.signupPrestataireForm.value.experience ,
        });

        this.formSubmitted = true;
          this.signupPrestataireForm.reset();

    } else {
      this.formInvalid = true;
      console.log('Request incompleted');
    }
  }

  rejoindre() { this.whatsapp.prestataire(); }

  stats = [
    { num: '+150', lbl: 'Prestataires actifs' },
    { num: '+500', lbl: 'Missions réalisées' },
    { num: '< 2h', lbl: 'Délai de réponse' },
    { num: '24h', lbl: 'Paiement après mission' },
  ];

  avantages = [
    { icon: '📲', title: 'Clients livrés sur WhatsApp', desc: 'Vous recevez les demandes clients directement sur votre téléphone. Pas de plateforme compliquée à gérer.' },
    { icon: '💰', title: 'Payé rapidement', desc: 'Votre paiement Mobile Money est envoyé dans les 2h après validation de la mission par le client.' },
    { icon: '✅', title: 'Badge Pro Vérifié', desc: 'Soutramoi vérifie vos compétences et vous attribue un badge. Les clients font confiance aux pros certifiés.' },
    { icon: '📈', title: 'Gagnez plus de clients', desc: 'Plus vous intervenez vite et bien, plus vous remontez dans les recommandations Soutramoi.' },
    { icon: '🔒', title: 'Paiement sécurisé garanti', desc: 'Le client paie avant votre déplacement. Vous ne travaillez jamais pour rien.' },
    { icon: '🤝', title: 'Support de l\'équipe Soutramoi', desc: 'Notre équipe est disponible sur WhatsApp pour vous aider en cas de litige ou de question.' },
  ];

  metiers = [
    { icon: '❄️', nom: 'Technicien climatisation' },
    { icon: '🔧', nom: 'Plombier' },
    { icon: '⚡', nom: 'Électricien' },
    { icon: '🎨', nom: 'Peintre' },
    { icon: '🪚', nom: 'Menuisier' },
    { icon: '🌿', nom: 'Jardinier' },
    { icon: '👕', nom: 'Blanchisserie' },
    { icon: '🧹', nom: 'Agent de nettoyage' },
    { icon: '🏗️', nom: 'Maçon' },
    { icon: '🔑', nom: 'Serrurier' },
    { icon: '📺', nom: 'Technicien électroménager' },
    { icon: '🚿', nom: 'Carreleur' },
  ];

  process = [
    { icon: '📝', title: 'Vous postulez sur WhatsApp', desc: 'Envoyez votre métier, votre expérience et votre quartier. On répond sous 24h.' },
    { icon: '✅', title: 'On vérifie vos compétences', desc: 'Échange rapide pour confirmer votre expertise. Pas de tests compliqués.' },
    { icon: '📲', title: 'Vous recevez des demandes', desc: 'Dès votre validation, les demandes de clients arrivent sur votre WhatsApp.' },
    { icon: '💸', title: 'Vous êtes payé après chaque mission', desc: 'Mobile Money dans les 2h après confirmation du client. Simple et fiable.' },
  ];
}
