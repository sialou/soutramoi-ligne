import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent  implements OnInit{

  constructor (private route: ActivatedRoute){}

    ngOnInit() {
      const serviceId: string|null= this.route.snapshot.paramMap.get('id')

    }


}
