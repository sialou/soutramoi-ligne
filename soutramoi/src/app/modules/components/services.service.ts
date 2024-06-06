import { Injectable } from '@angular/core';
import { ServiceC } from '../service';
//import { SERVICES } from '../service-liste';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServiceList():Observable<ServiceC[]>{

    return this.http.get<ServiceC[]>('api/pokemons').pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,[]))

    )
   // return SERVICES;
  }

  getServiceById(serviceId: number): Observable<ServiceC|undefined>{
   // return SERVICES.find(service=>service.id == serviceId);
    return this.http.get<ServiceC>(`api/pokemons/${serviceId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    );

  }

  private log(response: ServiceC[]|ServiceC|undefined){

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


}
