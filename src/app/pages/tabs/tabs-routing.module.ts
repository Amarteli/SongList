import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
/* Ari Martelius, 1800582
  Here navigation is handled, all needed pages are added here.
  About -page is set to be default.  */
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'details',
          children:
            [
              {
                path: '',
                loadChildren: 'src/app/pages/songlist/songlist.module#SonglistPageModule'
              }
            ]
        },
        {
          path: 'about',
          children:
            [
              {
                path: '',
                loadChildren: 'src/app/pages/about/about.module#AboutPageModule'
              }
            ]
        },
        {
          path: 'register',
          children:
            [
              {
                path: '',
                loadChildren: 'src/app/pages/register/register.module#RegisterPageModule'
              }
            ]
        },
        {
          path: 'main',
          children:
            [
              {
                path: '',
                loadChildren: 'src/app/pages/main/main.module#MainPageModule'
              }
            ]
        },
        {
          path: 'home',
          children:
            [
              {
                path: '',
                loadChildren: 'src/app/home/home.module#HomePageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tabs/main',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/tabs/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}
