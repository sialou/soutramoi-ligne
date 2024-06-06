import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';



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
}
