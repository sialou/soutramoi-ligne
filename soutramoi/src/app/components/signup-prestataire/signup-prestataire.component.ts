import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import emailjs from '@emailjs/browser';

declare var M: any;
@Component({
  selector: 'app-signup-prestataire',
  templateUrl: './signup-prestataire.component.html',
  styleUrls: ['./signup-prestataire.component.css']
})
export class SignupPrestataireComponent {

  signupPrestataireForm: FormGroup = new FormGroup({
    name:new FormControl(''),
    service:new FormControl(''),
    experience:new FormControl(''),
    ville:new FormControl(''),
    commune:new FormControl(''),
    tel:new FormControl(''),
    condition:new FormControl('')


  });
  formSubmitted: boolean = false;
  formInvalid: boolean = false;

  constructor(private http: HttpClient, private datePipe: DatePipe, private fb: FormBuilder){ }
  @ViewChild('select1', {static: false}) select1Element: ElementRef;
  ngAfterViewInit() {
    this.initializeSelect();
  }
  initializeSelect() {

    const options = {}; // Your options for the select initialization

    const select1 = this.select1Element.nativeElement;

    M.FormSelect.init(select1, options);
  }
  ngOnInit(): void {
    this.signupPrestataireForm = this.fb.group({
      name: ['', Validators.required],
      service: ['', Validators.required],
      ville: ['', Validators.required],
      commune: ['', Validators.required],
      tel: ['', Validators.required],
      experience: ['', Validators.required],
      condition: ['', Validators.required]


     // email: ['', [Validators.required, Validators.email]]
    });
  }
  async onSubmit() {

    this.formInvalid = false; // Reset invalid state
    if (this.signupPrestataireForm.valid) {

      const formData = this.signupPrestataireForm.value;
       emailjs.init('R1YF4paGYeuHKRWxf');
      let response = await emailjs.send("service_l2tmp06","template_6m5ihd4",{
        from_name: this.signupPrestataireForm.value.name,
        to_name: "Prestataire",
        from_email: " ",
        subject: "Prestataire_subject",
        message:'Service : ' +this.signupPrestataireForm.value.service +'Ville : ' +this.signupPrestataireForm.value.ville +'Commune :'+this.signupPrestataireForm.value.commune+ 'Teléphone :'+this.signupPrestataireForm.value.tel  +'Experience : '+ this.signupPrestataireForm.value.experience ,
        });

        this.formSubmitted = true;
          this.signupPrestataireForm.reset();

    } else {
      this.formInvalid = true;
      console.log('Request incompleted');
    }
  }

}
