import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, JsonPipe, DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlanchisserieComponent } from './blanchisserie/blanchisserie.component';
import { ElectricienComponent } from './electricien/electricien.component';
import { FroidComponent } from './froid/froid.component';
import { JardinageComponent } from './jardinage/jardinage.component';
import { LavageComponent } from './lavage/lavage.component';
import { MenuisierieComponent } from './menuisierie/menuisierie.component';
import { NettoyageComponent } from './nettoyage/nettoyage.component';
import { PeintreComponent } from './peintre/peintre.component';
import { PlombierComponent } from './plombier/plombier.component';
import { BorderCardDirective } from '../border-card.directive';
import { ServiceColorPipe } from '../service-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from 'src/app/components/contact/contact.component';


const serviceRoutes: Routes =[

  {

    path:'plombierie',
    component:PlombierComponent,
    pathMatch: 'full'
   },
   {

    path:'peintre',
    component: PeintreComponent,
    pathMatch: 'full'
   },
   {

    path:'nettoyage',
    component:NettoyageComponent,
    pathMatch: 'full'
   },
   {

    path:'menuiserie',
    component:MenuisierieComponent,
    pathMatch: 'full'
   },
   {

    path:'lavage',
    component:LavageComponent,
    pathMatch: 'full'
   },
   {

    path:'jardinage',
    component: JardinageComponent,
    pathMatch: 'full'
   },
   {

    path:'froid',
    component:FroidComponent,
    pathMatch: 'full'
   },
   {

    path:'electricite',
    component:ElectricienComponent,
    pathMatch: 'full'
   },
   {

    path:'blanchisserie',
    component:BlanchisserieComponent,
    pathMatch: 'full'
   },
   {

     path:'home',
     component:HomeComponent,
     pathMatch: 'full'

   },
   {

     path:'service/add',
     component:ContactComponent,
     pathMatch: 'full'

   }

];

@NgModule({
  declarations: [
    HomeComponent,
    BlanchisserieComponent,
    ElectricienComponent,
    FroidComponent,
    JardinageComponent,
    LavageComponent,
    MenuisierieComponent,
    NettoyageComponent,
    PeintreComponent,
    PlombierComponent,
    BorderCardDirective,
    ServiceColorPipe,
    ContactComponent

  ],
  imports: [
    CommonModule,

   // FormsModule,
   NgbModule,
    ReactiveFormsModule,
    JsonPipe,
    RouterModule.forChild(serviceRoutes)
  ],
  providers: [DatePipe]
})
export class ServiceModule { }
