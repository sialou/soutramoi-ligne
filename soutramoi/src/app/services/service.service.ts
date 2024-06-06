/*import { Injectable } from '@angular/core';
import { Service } from '../models/service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private services:Service[]=[]

  constructor(private http: HttpClient) { }

  /*getServices(): Promise<Service[]>
  {

    return new Promise((resolve, reject)=>{

        if (this.services.length){

          resolve(this.services)
        }else{

          reject([])
        }
        })

    }*/

  /*  getServices(){

      this.http.get
    }

 getNumber(): Observable<Number>{

      return of(45)
  }

  editUser(user_id:number,user: Service){

  }

  addUser(user: Service){

  }
}*/


import { Injectable } from '@angular/core';
import { ServiceC } from '../modules/service';
//import { SERVICES } from '../service-liste';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServiceList():Observable<ServiceC[]>{

    return this.http.get<ServiceC[]>('api/services').pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,[]))

    )
   // return SERVICES;
  }

  getServiceById(serviceId: number): Observable<ServiceC|undefined>{
   // return SERVICES.find(service=>service.id == serviceId);
    return this.http.get<ServiceC>(`api/services/${serviceId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    );

  }

  updateService (service: ServiceC): Observable<ServiceC|undefined> {

    const httpOptions ={

      Headers: new HttpHeaders({'Content-Type':'application/json'

      })
    };
    //return this.http.put('api/services', service, httpOptions).pipe(
      return this.http.put('api/services', service, { headers: httpOptions.Headers }).pipe(
        tap((response)=>this.log(response)),
        catchError((error)=> this.handleError(error, undefined))
      );

  }

addService (service: ServiceC): Observable<ServiceC|undefined> {

    const httpOptions ={

      Headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    //return this.http.put('api/services', service, httpOptions).pipe(
      return this.http.post<ServiceC>('api/services', service, { headers: httpOptions.Headers }).pipe(
        tap((response)=>this.log(response)),
        catchError((error)=> this.handleError(error, null))
      );

  }

  deleteServiceById(serviceId: number): Observable<null> {
    return this.http.delete(`api/services/${serviceId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    );

  }

  private log(response: any){

    console.table(response)
  }

  private handleError(error: Error, errorValue: any){

    console.error(error)
    return of(errorValue)
  }


  getServiceTypeList(): string[] {

    return [

      'Menuisier',
      'Maçon',
      'ELectricien'
    ]
  }

  getNumber(): Observable<Number>{

    return of(45)
}


}

