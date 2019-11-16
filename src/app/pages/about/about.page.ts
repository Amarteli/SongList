import { Component, OnInit } from '@angular/core';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  tabBarElement: any;
  constructor() { }

  ngOnInit() {
    this.tabBarElement = document.getElementById('hidemain');
    this.tabBarElement.style.display = 'flex';
  }

}
