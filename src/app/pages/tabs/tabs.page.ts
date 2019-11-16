import { Component, OnInit } from '@angular/core';
import {Router, Event, NavigationEnd} from '@angular/router';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  tabBarElement: any;
  constructor() { }

  ngOnInit() {
    this.tabBarElement = document.getElementById('hidemain');
    this.tabBarElement.style.display = 'flex';
  }

}
