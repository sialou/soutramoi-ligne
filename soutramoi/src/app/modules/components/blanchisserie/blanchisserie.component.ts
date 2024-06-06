import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import emailjs from '@emailjs/browser';

declare var M: any;
@Component({
  selector: 'app-blanchisserie',
  templateUrl: './blanchisserie.component.html',
  styleUrls: ['./blanchisserie.component.css']
})

export class BlanchisserieComponent {

  signupBlanchisserieForm: FormGroup = new FormGroup({
    name:new FormControl(''),
    service:new FormControl(''),
    experience:new FormControl(''),
    ville:new FormControl(''),
    commune:new FormControl(''),
    tel:new FormControl(''),
    password:new FormControl('')

  });
  formSubmitted: boolean = false;
  formInvalid: boolean = false;
  constructor(private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder){ }
  @ViewChild('select1', {static: false}) select1Element: ElementRef;

  initializeSelect() {

    const options = {}; // Your options for the select initialization

    const select1 = this.select1Element.nativeElement;

    M.FormSelect.init(select1, options);
  }

  ngOnInit(): void {
    this.signupBlanchisserieForm = this.fb.group({
      name: ['', Validators.required],
      service: ['', Validators.required],
      ville: ['', Validators.required],
      commune: ['', Validators.required],
      tel: ['', Validators.required]
     // email: ['', [Validators.required, Validators.email]]
    });
  }

  ngAfterViewInit() {
    this.initializeSelect();
  }
  async onSubmit(){
    this.formInvalid = false;
    if (this.signupBlanchisserieForm.valid) {
      const currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    let obj = this.signupBlanchisserieForm.value;
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
      from_name: this.signupBlanchisserieForm .value.name,
      to_name: "Blanchisserie",
      from_email: " ",
      subject: "Prestataire_subject",
      message:'Service : ' +this.signupBlanchisserieForm .value.service +'Ville : ' +this.signupBlanchisserieForm .value.ville +'Commune :'+this.signupBlanchisserieForm .value.commune+ 'Teléphone :'+this.signupBlanchisserieForm .value.tel ,
      });
      this.formSubmitted = true;
      this.signupBlanchisserieForm.reset();

    /*this.http.post('https://www.api.soutramoi.com/api/v1/requete', obj, { headers })
      .pipe(
        map((res: any) => {
          console.error('Prestataires created');
          this.formSubmitted = true;
      this.signupBlanchisserieForm.reset();
          return res;
        }),
        catchError((error) => {
          console.error('Error creating prestataires:', error);
          // Handle error appropriately, e.g., show error message to user
          throw error;

        })
      )
      .subscribe();

    console.log(this.signupBlanchisserieForm.value);*/
    } else {
      console.log('Form is invalid');
      this.formInvalid = true;
    }


   }

}
