import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
/* error showed with this, not ymplemented yet */
export class ToastService {

  constructor(private toastController: ToastController) {}

  async present(message) {

      const toast = await this.toastController.create({

          message,
          duration: 2000

      });
      toast.present();
  }

}
