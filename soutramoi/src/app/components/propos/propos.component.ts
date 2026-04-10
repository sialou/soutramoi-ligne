import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WhatsappService } from '../shared/Whatsapp.service';



@Component({
  selector: 'app-propos',
  templateUrl: './propos.component.html',
  styleUrls: ['./propos.component.css']
})
export class ProposComponent implements OnInit{

  images = [
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
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  next() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prev() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
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

   constructor(private whatsapp: WhatsappService) {}
  demanderService() { this.whatsapp.open(); }
 
  values = [
    { icon: '🔍', title: 'Transparence',   desc: 'Prix affichés, frais de visite annoncés. Aucune mauvaise surprise.' },
    { icon: '✅', title: 'Fiabilité',      desc: 'Chaque prestataire est vérifié avant d\'être mis en avant.' },
    { icon: '⚡', title: 'Réactivité',     desc: 'Réponse en moins de 2h. Intervention sous 24h.' },
    { icon: '🤝', title: 'Solidarité',     desc: 'On soutient aussi les pros locaux en leur apportant des clients.' },
  ];
 
  chiffres = [
    { num: '+150', lbl: 'Prestataires', desc: 'Vérifiés et actifs à Abidjan' },
    { num: '+500', lbl: 'Travaux réalisés', desc: 'Depuis le lancement' },
    { num: '2',    lbl: 'Villes', desc: 'Abidjan et Grand-Bassam' },
    { num: '3.8/5', lbl: 'Note moyenne', desc: 'Des prestataires sur la plateforme' },
  ];
}
