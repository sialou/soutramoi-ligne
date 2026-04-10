
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WhatsappService } from '../shared/Whatsapp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    isScrolled = false;
  menuOpen = false;

  constructor(private waService: WhatsappService) {}
  @HostListener('window:scroll')
  onScroll() { this.isScrolled = window.scrollY > 10; }

  toggle() { this.menuOpen = !this.menuOpen; }
  close()  { this.menuOpen = false; }
  wa()     { this.waService.abonnement(); }

}
