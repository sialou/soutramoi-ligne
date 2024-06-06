import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceC } from 'src/app/modules/service';
import { ServicesService } from 'src/app/services/service.service';
@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
@Input() service: ServiceC;
types: string[];
isAddForm: boolean;

constructor(
   private  serviceService:ServicesService,
   private router:Router

){}

ngOnInit() {
  this.types=this.serviceService.getServiceTypeList();
  this.isAddForm=this.router.url.includes('add');
}

/*hasType(type:string): boolean{
    return this.service.types.includes(type)

}*/

/*selecType($event: Event, type:string){

  const isChecked: boolean = ($event.target as HTMLInputElement).checked
  if(isChecked){

    this.service.types.push(type);
  }else{

    const index =this.service.types.indexOf(type);
    this.service.types.splice(index, 1);
  }
  }*/

  /*isTypesValid(type:string): boolean{
    if (this.service.types.lenght==1 && this.hasType(type)){

      return false;
    }
    if (this.service.types.lenght>21 && !this.hasType(type)){

      return false;
    }
    return true
  }*/

  onSubmit(){
if(this.isAddForm){
  this.serviceService.addService(this.service)
  .subscribe(()=> this.router.navigate(['/menuiserie',this.service.id]));

}
else{
   this.serviceService.updateService(this.service)
   .subscribe(()=> this.router.navigate(['/menuiserie',this.service.id]));

}
  }
}


