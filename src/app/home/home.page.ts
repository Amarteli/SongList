import { Component, OnInit } from '@angular/core';
import { Song, SongsService } from '../services/songs.service';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  songs: Song[];

  constructor(private SongService: SongsService) { }
/* App gets song-data from firebase */
  ngOnInit() {
    this.SongService.getSongs().subscribe(res => {
      this.songs = res;
    });
  }

  remove(item) {
    this.SongService.removeSong(item.id);
  }
}
