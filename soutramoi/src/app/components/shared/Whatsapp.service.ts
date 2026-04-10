// src/app/shared/whatsapp.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly phone = '2250757994846'; // ← REMPLACEZ PAR VOTRE NUMÉRO

  open(message: string = 'Bonjour Soutramoi, j\'ai besoin d\'aide') {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${this.phone}?text=${encoded}`, '_blank');
  }

  service(nom: string) {
    this.open(`Bonjour Soutramoi, j'ai besoin d'un service : ${nom}`);
  }

  abonnement() {
    this.open(`Bonjour Soutramoi, je veux souscrire à l'abonnement climatisation à 21 000 FCFA/Trimestre. Je suis à `);
  }

  prestataire() {
    this.open(`Bonjour Soutramoi, je suis un professionnel et je veux rejoindre votre réseau de prestataires.`);
  }

  contact(sujet: string, message: string) {
    this.open(`Bonjour Soutramoi,\nSujet : ${sujet}\n\n${message}`);
  }
}