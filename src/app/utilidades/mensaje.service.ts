import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private toastController: ToastController) {}

  async mensajeOK(msj:string, ic:string) {
    const toast = await this.toastController.create({
      message: 'msj ',
      duration: 1500,
      position: 'bottom',
      icon:ic
    });
  
    await toast.present();
  }
}
