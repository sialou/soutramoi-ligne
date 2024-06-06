import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval,Subscription } from 'rxjs';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/service.service';
/*import { SERVICES } from './service-liste';
import { Service } from './service';*/
import { SERVICES } from 'src/app/modules/service-liste';
import { ServiceC } from 'src/app/modules/service';
import { JobsService } from 'src/app/services/jobs.service';
//import { SERVICES } from 'src/app/service-liste';
//import { ServiceC } from 'src/app/service';
//import { BorderCardDirective } from 'src/app/border-card.directive';
import { Router } from '@angular/router';
import { Jobs } from 'src/app/models/jobs';


interface Testimonial {
  text: string;
  author: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy  {
  serviceListe: ServiceC[] =SERVICES;
  serviceList: ServiceC[];
  serviceSelected: ServiceC|undefined;
  services: Service[]=[]
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
  constructor(private serviceService: ServicesService, private router:Router,private job:JobsService ){

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
  ngOnInit(): void {
   // this.getJobList();
    /*if (this.autoplayInterval > 0) {
      this.startAutoplay();
    }*/
  }

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

    ngOnDestroy(): void{

     // this.stopAutoplay();
      this.myvardata?.unsubscribe
    }

    //selectService(service: Service){
      selectService(serviceId: string){
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

    }

deleteService(service: ServiceC){

  this.serviceService.deleteServiceById(service.id)
  .subscribe(()=> this.goAccueil());

}

goAccueil(){
  this.router.navigate(['/'])

}

goMyservice(service: ServiceC){
      this.router.navigate(['/menuiserie', service.id])

  }

  whatsappNumber = '+2250757994846'; // Replace with your WhatsApp number

  openWhatsAppChat() {
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  }

}
