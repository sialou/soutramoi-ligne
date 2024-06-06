import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

declare var M: any;
@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent {
  signupClientForm: FormGroup = new FormGroup({
    name:new FormControl(''),
    genre:new FormControl(''),
    ville:new FormControl(''),
    commune:new FormControl(''),
    tel:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')

  });

  constructor(private http: HttpClient){ }
  @ViewChild('select1', {static: false}) select1Element: ElementRef;


  initializeSelect() {

    const options = {}; // Your options for the select initialization

    const select1 = this.select1Element.nativeElement;

    M.FormSelect.init(select1, options);
  }

  onSubmit(){
    // debugger;
    let obj = this.signupClientForm.value;
    // Parse 'user_id' and 'job_id' to integers if they are not already
    //obj.user_id = 3;
    //obj.job_id =4;
    //obj.created_at = new Date();
    const token = '$2y$12$gyW8pP8GZT1vAF9od6CqfuoHM5SIcccUMFsEEAA79YXJj2U/P66pe'; // Replace 'your_access_token' with your actual access token

    // Set up headers with Authorization token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.http.post('http://localhost:8000/api/v1/abonnement', obj, { headers })
      .pipe(
        map((res: any) => {
          alert('Clients created');
          return res;
        }),
        catchError((error) => {
          console.error('Error creating abonnement:', error);
          // Handle error appropriately, e.g., show error message to user
          throw error;
        })
      )
      .subscribe();

    console.log(this.signupClientForm.value);

   }

}
