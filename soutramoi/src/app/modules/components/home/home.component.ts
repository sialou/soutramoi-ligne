import { Component, OnInit, OnDestroy } from '@angular/core';


import { interval,Subscription } from 'rxjs';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/service.service';
/*import { SERVICES } from './service-liste';
import { Service } from './service';*/
//import { SERVICES } from 'src/app/modules/service-liste';
import { ServiceC } from 'src/app/modules/service';
import { JobsService } from 'src/app/services/jobs.service';
//import { SERVICES } from 'src/app/service-liste';
//import { ServiceC } from 'src/app/service';
//import { BorderCardDirective } from 'src/app/border-card.directive';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/models/jobs';
import { WhatsappService } from 'src/app/components/shared/Whatsapp.service';


interface Testimonial {
  text: string;
  author: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './rain-section.css']
})
export class HomeComponent implements OnInit, OnDestroy  {
  //serviceListe: ServiceC[] =SERVICES;
  serviceList: ServiceC[];
  serviceSelected: ServiceC|undefined;
  //services: Service[]=[]
  data: Number | undefined
  myvardata: Subscription|undefined
  jobs:Array<Jobs>=[];
  images = [
    { id: 1, url: '../../../assets/awe.jpg' },
    { id: 2, url: '../../../assets/orange_corners.jpg' },
    { id: 3, url: '../../../assets/startup.png' },
    { id: 4, url: '../../../assets/baab.png' },
    { id: 5, url: '../../../assets/awe.jpg' },
    { id: 6, url: '../../../assets/orange_corners.jpg' },
    // Add more image objects as needed
  ];
  constructor(private serviceService: ServicesService, private router:Router,private job:JobsService,private whatsapp: WhatsappService ){

  }

  testimonials: Testimonial[] = [
    { text: ' J\'ai eu besoin d\'un service de serrurier en pleine nuit et leur plateforme m\'a sauvé la mise. En quelques clics, j\'ai pu réserver un serrurier qui est venu rapidement et a résolu mon problème avec efficacité. Un grand merci à toute l\'équipe de Soutramoi!', author: 'Pierre, Marcory' },
    { text: 'Je suis très impressionnée par le service offert par Soutramoi. J\'avais besoin d\'un électricien pour réparer une panne à la maison et j\'ai trouvé leur plateforme très facile à utiliser. Le dépanneur qui est venu était compétent et sympathique. ', author: 'Sophie, Bingerville' },
    { text: 'Leur service de réservation en ligne était si pratique et rapide! En moins de 30 minutes, j\'avais un plombier chez moi qui a résolu mon problème. Je recommande vivement Soutramoi à tous ceux qui ont besoin d\'une aide rapide et fiable!"', author: 'Marie-Claire, Koumassi' },
    { text: 'J\'ai utilisé leur service pour trouver un jardinier pour entretenir mon jardin, et j\'ai été agréablement surpris par la qualité du travail fourni. Le jardinier était compétent et sympathique, et mon jardin n\'a jamais été aussi beau. ', author: 'Jean-Luc, Cocody' },
    { text: 'Que ce soit pour trouver un électricien, un jardinier ou un service de nettoyage, leur plateforme est toujours là pour m\'aider rapidement et efficacement. Leur équipe est également très professionnelle et serviable. ', author: 'Sylvie, Bassam' },
    { text: 'Ma climatisation est tombée en panne pendant une vague de chaleur et j\'avais désespérément besoin d\'aide. Grâce à Soutramoi, j\'ai pu trouver un technicien qualifié qui est venu rapidement et a réussi à réparer ma climatisation en un temps record. ', author: 'David, Marcory ' }
    // Add more testimonials as needed
  ];

    images2 = [
    { id: 1, url: '../../../assets/awe.jpg' },
    { id: 2, url: '../../../assets/orange_corners.jpg' },
    { id: 3, url: '../../../assets/startup.png' },
    { id: 4, url: '../../../assets/baab.png' },
    { id: 5, url: '../../../assets/awe.jpg' },
    { id: 6, url: '../../../assets/orange_corners.jpg' },
    // Add more image objects as needed
  ];
  currentImageIndex: number = 0;
  autoplayInterval: number = 3000; // milliseconds
  autoplaySubscription: Subscription;

  ngOnInit(): void {
    if (this.autoplayInterval > 0) {
      this.startAutoplay();
    }
    
    this.initFetes();
   
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  next() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images2.length;
  }

  prev() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images2.length) % this.images2.length;
  }

  startAutoplay() {
    this.autoplaySubscription = interval(this.autoplayInterval).subscribe(() => {
      this.next();
    });
  }

  stopAutoplay() {
    if (this.autoplaySubscription) {
      this.autoplaySubscription.unsubscribe();
    }
  }


    showFetesBanner = true;
  joursAvantNoel = 0;

  flocons: { x: number; dur: number; delay: number; size: number; opacity: number }[] = [];
  bulbes: { x: number; y: number; color: string }[] = [];

 

  private initFetes(): void {
    // Calcul du nombre de jours avant Noël (25 décembre)
    const today = new Date();
    const currentYear = today.getFullYear();
    let noel = new Date(currentYear, 11, 25); // 11 = décembre

    // Si Noël est déjà passé cette année, viser l'année prochaine
    if (today > noel) {
      noel = new Date(currentYear + 1, 11, 25);
    }

    const diffTime = noel.getTime() - today.getTime();
    this.joursAvantNoel = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Génération des flocons de neige
    this.flocons = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      dur: 8 + Math.random() * 10,
      delay: Math.random() * 10,
      size: 10 + Math.random() * 14,
      opacity: 0.3 + Math.random() * 0.5
    }));

    // Génération des ampoules de la guirlande
    const colors = ['#E24B4A', '#FDE68A', '#22C55E', '#3B82F6'];
    this.bulbes = Array.from({ length: 9 }, (_, i) => ({
      x: 50 + i * 112.5,
      y: i % 2 === 0 ? 15 : 28,
      color: colors[i % colors.length]
    }));
  }

  waFetes(): void {
    const numero = '2250710681405'; // ← remplace par ton vrai numéro WhatsApp
    const message = encodeURIComponent(
      "Bonjour ! Je suis intéressé(e) par l'offre spéciale fêtes -20% (Code : FETES2025) 🎄"
    );
    window.open(`https://wa.me/${numero}?text=${message}`, '_blank');
  }

 /* currentTestimonialIndex: number = 0;
  autoplayInterval: number = 5000; // milliseconds
  autoplaySubscription: Subscription;
  chunk(array: any[], size: number): any[][] {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    );
  }


  next() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  startAutoplay() {
    this.autoplaySubscription = interval(this.autoplayInterval).subscribe(() => {
      this.next();
    });
  }

  stopAutoplay() {
    if (this.autoplaySubscription) {
      this.autoplaySubscription.unsubscribe();
    }
  }*/
 

  /*loadData() {
    this.job.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }*/
  /*getJobList() {
    this.job.getJobs().subscribe(data => {

      this.jobs = data;
      console.log(data);
    });
  }*/
 /* ngOnInit() {
    this.job.getJobs()
      .subscribe(response => {
        this.jobs = response;
      });
}*/
    /*ngOnInit(): void{

    this.myvardata=  this.serviceService.getNumber()
      .subscribe({
        next:(value: Number)=>{
          this.data=value
        },
        error:(error:any)=>{
          console.log(error);
        },
        complete: ()=>{
          console.log("Complete")
        },

      })

      this.serviceService.getServiceList()
      .subscribe(serviceList=> this.serviceList= this.serviceList);

*/
     // this.services= this.serviceService.getUsers()
    /* this.serviceService.getServices()
     .then((myservices: Service[])=>{
        this.services=myservices

     })
     .catch(()=>{
      this.services=[]

     })
     */
  //  }

   /* ngOnDestroy(): void{

     // this.stopAutoplay();
      //this.myvardata?.unsubscribe
    }*/

    //selectService(service: Service){
      /*selectService(serviceId: string){
        //const id =+serviceId
        const service: ServiceC|undefined =this.serviceListe.find(service => service.id == +serviceId)
        if(service)
        {
          console.log(`vous avez cliqué sur un service ${service.name}`)
        this.serviceSelected=service;
        }else{
          console.log(`Le service demandé n'existe pas `)
          this.serviceSelected=service;
        }

    }*/

deleteService(service: ServiceC){

  this.serviceService.deleteServiceById(service.id)
  .subscribe(()=> this.goAccueil());

}

goAccueil(){
  this.router.navigate(['/'])

}



  demanderService() { this.whatsapp.open('Bonjour Soutramoi, j\'ai besoin d\'un service à domicile.'); }
  sAbonner()        { this.whatsapp.abonnement(); }
  waService(nom: string) { this.whatsapp.service(nom); }

  stats = [
    { num: '+150', lbl: 'Prestataires vérifiés' },
    { num: '+500', lbl: 'Travaux réalisés' },
    { num: '2',    lbl: 'Villes couvertes' },
    { num: '3.8/5', lbl: 'Note moyenne' },
  ];

  services = [
    { icon:'❄️', nom:'Climatisation & Froid',  price:'Nettoyage split : 8 000 – 12 000 FCFA\nRecharge gaz : à partir de 20 000 FCFA',    typeClass:'badge-fixed', typeLabel:'✓ Prix fixe affiché' },
    { icon:'🔧', nom:'Plomberie',               price:'Débouchage : à partir de 8 000 FCFA\nVisite diagnostic : 2 500 FCFA',             typeClass:'badge-visit', typeLabel:'🔍 Visite + devis' },
    { icon:'⚡', nom:'Électricité',             price:'Prise / interrupteur : à partir de 8 000 FCFA\nVisite diagnostic : 2 500 FCFA',    typeClass:'badge-visit', typeLabel:'🔍 Visite + devis' },
    { icon:'🎨', nom:'Peinture',                price:'1 pièce (main d\'œuvre) : 25 000 – 40 000 FCFA\nGrand chantier : sur devis',    typeClass:'badge-fixed', typeLabel:'✓ Prix fixe affiché' },
    { icon:'🚪', nom:'Menuiserie',              price:'Réparation porte/serrure : 8 000 – 20 000 FCFA\nSur mesure : selon matériaux',  typeClass:'badge-devis', typeLabel:'📋 Sur devis' },
    { icon:'🌿', nom:'Jardinage',               price:'Tonte pelouse : 5 000 – 10 000 FCFA\nEntretien complet : à partir de 20 000 FCFA', typeClass:'badge-fixed', typeLabel:'✓ Prix fixe affiché' },
  ];

  steps = [
    { title: 'Vous contactez via WhatsApp', desc: 'Cliquez "Prendre rendez-vous", décrivez votre besoin. On vous répond dans les 2h.' },
    { title: 'On trouve votre pro & vous payez', desc: 'On vous propose un technicien qualifié avec le tarif. Vous payez par Mobile Money avant l\'intervention.' },
    { title: 'Le pro intervient chez vous', desc: 'Il effectue le travail. Vous validez par WhatsApp. Nous le payons dans les 2h. Laissez un avis.' },
  ];

  temoignages = [
    { stars:'★★★★★', text:'J\'ai utilisé leur service pour un jardinier et j\'ai été agréablement surpris par la qualité du travail. Le jardinier était compétent, sympathique, et mon jardin n\'a jamais été aussi beau.', nom:'Jean-Luc', lieu:'Cocody, Abidjan', initiales:'JL' },
    { stars:'★★★★★', text:'Que ce soit pour trouver un électricien ou un jardinier, leur plateforme est toujours là pour m\'aider rapidement. Leur équipe est très professionnelle et serviable.', nom:'Sylvie', lieu:'Bassam, Abidjan', initiales:'SY' },
    { stars:'★★★★☆', text:'Ma climatisation est tombée en panne pendant la canicule. Grâce à Soutramoi, j\'ai trouvé un technicien qualifié qui est venu rapidement et a tout réparé en un temps record.', nom:'David', lieu:'Marcory, Abidjan', initiales:'DA' },
  ];

  proStats = [
    { num:'+150', lbl:'Prestataires actifs' },
    { num:'+500', lbl:'Missions réalisées' },
    { num:'24h',  lbl:'Délai paiement' },
    { num:'0 F',  lbl:'Frais d\'inscription' },
  ];

showRainBanner = true;
  waRain(service: string) {
  this.whatsapp.open(
    `🌧️ Bonjour Soutramoi, la saison des pluies arrive et j'ai besoin d'un service de ${service}. ` +
    `Je suis à [votre quartier]. Quand pouvez-vous intervenir ?`
  );
}

waRainPack() {
  this.whatsapp.open(
    `🏡 Bonjour Soutramoi, je veux commander le *Pack Maison Sèche* à 25 000 FCFA. ` +
    `Diagnostic caniveaux + toiture + électricité en une visite. Je suis à [votre quartier].`
  );
}
}
