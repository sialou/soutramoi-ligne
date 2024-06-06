import { Injectable } from '@angular/core';
import{InMemoryDbService} from  'angular-in-memory-web-api'
import { SERVICES } from './modules/service-liste';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb(){
    const services= SERVICES
return {services};

  }
  constructor() { }
}
