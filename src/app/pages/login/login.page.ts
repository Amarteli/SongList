import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import 'firebase/auth';
import { ToastService } from './../../services/toast.service';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email;
  password;

  constructor( public navCtrl: NavController, private toastService: ToastService) { }
/* link to register page */
  ngOnInit() {
  }
  goToRegisterPage() {
    this.navCtrl.navigateForward('/tabs/register');
  }
/* Login check from firebase */
  onLogin(email, password) {
    let errormsg = null;
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      this.navCtrl.navigateRoot('/tabs');
    })
    .catch(function(error) {
    const  errorCode = error.code;

    errormsg = error.message;
    this.toastService.present(errormsg);
  });
}}
