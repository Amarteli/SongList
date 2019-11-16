import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
/* Ari Martelius (1800582), Tommi Ralli (1800583)
  Modified routes to start on login -page and then use tabs-page for routing*/
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'src/app/pages/login/login.module#LoginPageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'details/:id', loadChildren: 'src/app/pages/songlist/songlist.module#SonglistPageModule'},
  { path: 'details', loadChildren: 'src/app/pages/songlist/songlist.module#SonglistPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
