import { Component, OnInit } from '@angular/core';
import { SERVICES } from './modules/service-liste';
import { ServiceC } from './modules/service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'soutramoi';
  serviceListe: ServiceC[] =SERVICES;
  serviceSelected: ServiceC|undefined;

  ngOnInit(){

    console.table(this.title)
   // this.selectService(this.serviceListe[0])
  }


}
