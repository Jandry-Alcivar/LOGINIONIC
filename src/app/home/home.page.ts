import { Component } from '@angular/core';
import { MensajeService } from '../utilidades/mensaje.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private MensajeService: MensajeService, private router: Router) {}

 login(email:any, password:any){
  if(email.value=="jandrypalacios2017@gmail.com"&& password.value=="12345678")
    {
     this.MensajeService.mensajeOK("Bienvenido","globe"); 
     this.router.navigateByUrl('/principal')
      
    }
    
 } 


}


