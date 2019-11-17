import { Component } from '@angular/core';
import firebaseConfig from './config/firebase';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
/* Ari Martelius (1800582), Tommi Ralli (1800583)
  Here sidemenu is created */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      firebase.initializeApp(firebaseConfig);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
   /* sidemenu links, linking thru tabs-page */
   sideMenu()  {
    this.navigate =
    [
      {
        icon : 'home',
        title : 'Home',
        url   : 'tabs/main'
      },
      {
        icon : 'list',
        title : 'Song list',
        url   : 'tabs/home'
      },
      {
        icon : 'help',
        title : 'About',
        url   : 'tabs/about'
      },

    ];
  }

}
