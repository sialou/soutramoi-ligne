import { ServiceC } from 'src/app/modules/service';
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import emailjs from '@emailjs/browser';
declare var M: any;
@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements AfterViewInit {

  abonnementForm: FormGroup = new FormGroup({
    type_abonnement:new FormControl(''),
    service:new FormControl(''),
    name: new FormControl(''), // Validator for user_id
    tel: new FormControl(''), // Validator for job_id
  //created_at:new FormControl('')
    /*user_id:new FormControl(''),
    job_id:new FormControl(''),*/

  });
  myDate = new Date();
  formSubmitted: boolean = false;
  formInvalid: boolean = false;
  constructor(private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder){ }

  @ViewChild('select1', {static: false}) select1Element: ElementRef;
  @ViewChild('select2', {static: false}) select2Element: ElementRef;

  ngAfterViewInit() {
    this.initializeSelect();
  }

  initializeSelect() {

    const options = {}; // Your options for the select initialization

    const select1 = this.select1Element.nativeElement;
    const select2 = this.select2Element.nativeElement;

    M.FormSelect.init(select1, options);
    M.FormSelect.init(select2, options);
  }

  ngOnInit(): void {
    this.abonnementForm= this.fb.group({
      type_abonnement: ['', Validators.required],
      service: ['', Validators.required],
      name: ['', Validators.required],
      tel: ['', Validators.required],

    });
  }

  async onSubmit() {

  this.formInvalid = false; // Reset invalid state
  if (this.abonnementForm.valid) {
    const formData = this.abonnementForm.value;
  // Parse 'user_id' and 'job_id' to integers if they are not already

  emailjs.init('R1YF4paGYeuHKRWxf');
  let response = await emailjs.send("service_l2tmp06","template_6m5ihd4",{
    from_name: "Soutramoi",
    to_name: "Abonnement",
    from_email: "",
    subject: "Abonnement_subject",
    message:'type_abonnement'+ this.abonnementForm.value.abonnement +'service'+this.abonnementForm.value.service+'name'+this.abonnementForm.value.name+'tel'+this.abonnementForm.value.tel,
    });
  /*obj.user_id = 3;
  obj.job_id =4;
  obj.created_at = new Date();
  const token = '$2y$12$gyW8pP8GZT1vAF9od6CqfuoHM5SIcccUMFsEEAA79YXJj2U/P66pe'; // Replace 'your_access_token' with your actual access token

  // Set up headers with Authorization token
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  this.http.post('https://www.api.soutramoi.com/api/v1/abonnement', obj, { headers })
    .pipe(
      map((res: any) => {
        alert('Abonnement created');
        return res;
      }),
      catchError((error) => {
        console.error('Error creating abonnement:', error);
        // Handle error appropriately, e.g., show error message to user
        throw error;
      })
    )
    .subscribe();*/
    this.formSubmitted = true;
    this.abonnementForm.reset();

  } else {
    this.formInvalid = true;
    console.log('Request incompleted');
  }
}

}
