import { Component, OnInit } from '@angular/core';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  tabBarElement: any;
  constructor() { }

  ngOnInit() {
    this.tabBarElement = document.getElementById('hidemain');
    this.tabBarElement.style.display = 'flex';
  }

}
