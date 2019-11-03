import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import 'firebase/auth';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  newEmail;
  newPassword;

  constructor(public navCtrl: NavController) { }

  /* registering new user */
  ngOnInit() {
  }
  registerUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        res => resolve(res),
        err => reject(err));
      this.navCtrl.navigateRoot('/tabs');
    });
   }

}
