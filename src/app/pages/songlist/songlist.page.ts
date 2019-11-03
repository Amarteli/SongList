import { Song, SongsService } from './../../services/songs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.page.html',
  styleUrls: ['./songlist.page.scss'],
})
export class SonglistPage implements OnInit {

  song: Song = {
    song: '',
    artist: '',
    createdAt: new Date().getTime(),
    priority: 1
  };

  songId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private router: Router,
              private songService: SongsService, private loadingController: LoadingController) { }
/* getting song id */
  ngOnInit() {
    this.songId = this.route.snapshot.params.id;
    if (this.songId)  {
      this.loadSong();
    }
  }
/* loading song  */
  async loadSong() {
    const loading = await this.loadingController.create({
      message: 'Loading Item..'
    });
    await loading.present();

    this.songService.getSong(this.songId).subscribe(res => {
      loading.dismiss();
      this.song = res;
    });
  }
/* removing song  */
  async removeSong() {
    const loading = await this.loadingController.create({
      message: 'Deleting item..'
    });
    await loading.present();

    if (this.songId) {
      this.songService.removeSong(this.songId).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/tabs/home');
      });
    }
  }
/* saving song  */
  async saveSong() {
    const loading = await this.loadingController.create({
      message: 'Saving item..'
    });
    await loading.present();

    if (this.songId) {
      this.songService.updateSong(this.song, this.songId).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/tabs/home');
      });
    } else {
      this.songService.addSong(this.song).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('/tabs/home');
      });
    }
  }

}
