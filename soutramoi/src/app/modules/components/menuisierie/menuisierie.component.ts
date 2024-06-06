import { Component, OnInit ,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/service.service';
//import { ServiceC } from;
//import { SERVICES } from 'src/app/service-liste';
import { ServiceC } from 'src/app/modules/service';
//import { SERVICES } from 'src/app/modules/service-liste';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import emailjs from '@emailjs/browser';


declare var M: any;
@Component({
  selector: 'app-menuisierie',
  templateUrl: './menuisierie.component.html',
  styleUrls: ['./menuisierie.component.css']
})
export class MenuisierieComponent implements OnInit {

  signupMenuisierieForm: FormGroup = new FormGroup({
    name:new FormControl(''),
    service:new FormControl(''),
    experience:new FormControl(''),
    ville:new FormControl(''),
    commune:new FormControl(''),
    tel:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')

  });

  @ViewChild('select1', {static: false}) select1Element: ElementRef;

   serviceListe : ServiceC[];
   service:ServiceC|undefined;
   formSubmitted: boolean = false;
   formInvalid: boolean = false;

  constructor(private route: ActivatedRoute, private router:Router,private serviceService: ServicesService,private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder ){}

  ngOnInit(): void {
    this.signupMenuisierieForm = this.fb.group({
      name: ['', Validators.required],
      service: ['', Validators.required],
      ville: ['', Validators.required],
      commune: ['', Validators.required],
      tel: ['', Validators.required]
     // email: ['', [Validators.required, Validators.email]]
    });
  }


  async onSubmit(){
    this.formInvalid = false;
    if (this.signupMenuisierieForm.valid) {
      const currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    let obj = this.signupMenuisierieForm.value;
    // Parse 'user_id' and 'job_id' to integers if they are not already
    obj.user_id = 3;
    obj.job_id =4;
    obj.created_at = currentDateAndTime;
    obj.hour = currentDateAndTime;
    obj.day =currentDateAndTime;
    obj.description = '3';
    obj.type ='4';
    const token = '$2y$12$gyW8pP8GZT1vAF9od6CqfuoHM5SIcccUMFsEEAA79YXJj2U/P66pe'; // Replace 'your_access_token' with your actual access token

    // Set up headers with Authorization token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    emailjs.init('R1YF4paGYeuHKRWxf');
    let response = await emailjs.send("service_l2tmp06","template_6m5ihd4",{
      from_name: this.signupMenuisierieForm.value.name,
      to_name: "Menuisierie",
      from_email: " ",
      subject: "Prestataire_subject",
      message:'Service : ' +this.signupMenuisierieForm.value.service +'Ville : ' +this.signupMenuisierieForm.value.ville +'Commune :'+this.signupMenuisierieForm.value.commune+ 'Teléphone :'+this.signupMenuisierieForm.value.tel ,
      });
      this.formSubmitted = true;
      this.signupMenuisierieForm.reset();
   /* this.http.post('https://www.api.soutramoi.com/api/v1/requete', obj, { headers })
      .pipe(
        map((res: any) => {
          console.error('Prestataires created');
          this.formSubmitted = true;
      this.signupMenuisierieForm.reset();
          return res;
        }),
        catchError((error) => {
          console.error('Error creating prestataires:', error);
          // Handle error appropriately, e.g., show error message to user
          throw error;

        })
      )
      .subscribe();

    console.log(this.signupMenuisierieForm.value);*/
    } else {
      console.log('Form is invalid');
      this.formInvalid = true;
    }


   }

  goAccueil(){
this.router.navigate(['/'])

  }


  initializeSelect() {

    const options = {}; // Your options for the select initialization

    const select1 = this.select1Element.nativeElement;

    M.FormSelect.init(select1, options);
  }

  ngAfterViewInit() {
    this.initializeSelect();
  }


}
