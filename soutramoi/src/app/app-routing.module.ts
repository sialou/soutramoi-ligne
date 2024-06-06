import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfilComponent } from './components/profil/profil.component';
import { MenuisierieComponent } from './modules/components/menuisierie/menuisierie.component';
import { ConditionComponent } from './components/condition/condition.component';
import { AbonnementPayementComponent } from './components/abonnement-payement/abonnement-payement.component';
import { ProposComponent } from './components/propos/propos.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { PrestataireDetailComponent } from './components/prestataire-detail/prestataire-detail.component';
import { PayementComponent } from './components/payement/payement.component';
import { NousComponent } from './components/nous/nous.component';
import { HomeComponent } from './modules/components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { SignupPrestataireComponent } from './components/signup-prestataire/signup-prestataire.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { PersonnalisationComponent } from './components/personnalisation/personnalisation.component';
import { ReservationComponent } from './components/reservation/reservation.component';

export const ROUTES : Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch: 'full'
  },
  /*pour la redirection*/
  /*
 {
    path:'',
    redirecTo:'signin',
    pathMatch: 'full'
  },
  */
  {
    path:'signin',
    component:SigninComponent,
    pathMatch: 'full'
  },
  {
    path:'personnalisation',
    component:PersonnalisationComponent,
    pathMatch: 'full'
  },
  {
    path:'reservation',
    component:ReservationComponent,
    pathMatch: 'full'
  },
   {
    path:'signup',
    component:SignupComponent,
    pathMatch: 'full'
   },
   {
    path:'signupClient',
    component:SignupClientComponent,
    pathMatch: 'full'
   },
   {
    path:'signupPrestataire',
    component:SignupPrestataireComponent,
    pathMatch: 'full'
  },
   {
    path:'abonnement',
    component:AbonnementComponent,
    pathMatch: 'full'
  },
   {
    path:'contact',
    component:ContactComponent,
    pathMatch: 'full'
  },
   {
    path:'faq',
    component:FaqComponent,
    pathMatch: 'full'
  },
   {
    path:'home',
    component:HomeComponent,
    pathMatch: 'full'
  },
   {
    path:'nous',
    component:NousComponent,
    pathMatch: 'full'
  },
   {
    path:'payement',
    component:PayementComponent,
    pathMatch: 'full'
  },
   {
    path:'prestataire-detail/:id',
    component:PrestataireDetailComponent,
    pathMatch: 'full'
  },
   {
    path:'service-details',
    component:ServiceDetailComponent,
    pathMatch: 'full'
  },
  {
   path:'service',
   component:ServiceComponent,
   pathMatch: 'full'
 },
 {
  path:'propos',
  component:ProposComponent ,
  pathMatch: 'full'
},
{
 path:'paiement-abonnement',
 component:AbonnementPayementComponent ,
 pathMatch: 'full'
},
{
 path:'conditions',
 component:ConditionComponent,
 pathMatch: 'full'
},
{
 path:'menuiserie/:id',
 component:MenuisierieComponent,
 pathMatch: 'full'
},
{
 path:'profil/:id',
 component:ProfilComponent,
 pathMatch: 'full'
},
//le declarer en dernier
{
  path:'**',
  component:PageNotFoundComponent,
  pathMatch: 'full'
}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
