import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { PayementComponent } from './components/payement/payement.component';
import { NousComponent } from './components/nous/nous.component';
import { PrestataireDetailComponent } from './components/prestataire-detail/prestataire-detail.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupPrestataireComponent } from './components/signup-prestataire/signup-prestataire.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

//import { AbonnementPayementComponent } from './components/abonnement-payement/abonnement-payement.component';
import { ServiceComponent } from './components/service/service.component';
import { ProposComponent } from './components/propos/propos.component';
import { AbonnementPayementComponent } from './components/abonnement-payement/abonnement-payement.component';
import { SignupComponent } from './components/signup/signup.component';
import { ConditionComponent } from './components/condition/condition.component';
import { ProfilComponent } from './components/profil/profil.component';
import { BorderCardDirective } from './modules/border-card.directive';
import { ServiceColorPipe } from './modules/service-color.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServiceModule } from './modules/components/service.module';
import { AppRoutingModule } from './app-routing.module';
import { ReservationComponent } from './components/reservation/reservation.component';
import { PersonnalisationComponent } from './components/personnalisation/personnalisation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
import { ServiceFormComponent } from './components/service-form/service-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
   // ContactComponent,
    AbonnementComponent,
    PayementComponent,
    NousComponent,
    PrestataireDetailComponent,
    ServiceDetailComponent,

    SigninComponent,
    SignupPrestataireComponent,

    SignupClientComponent,
   // AbonnementPayementComponent,
    ServiceComponent,
    ProposComponent,
    AbonnementPayementComponent,
    SignupComponent,

    ConditionComponent,
    ProfilComponent,
    //BorderCardDirective,
    //ServiceColorPipe,
    PageNotFoundComponent,
   // ReservationComponent,
    PersonnalisationComponent,
   ServiceFormComponent,

  ],
  imports: [
    ServiceModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
