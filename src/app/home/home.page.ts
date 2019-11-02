import { Component, OnInit } from '@angular/core';
import { Song, SongsService } from '../services/songs.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  songs: Song[];

  constructor(private SongService: SongsService) { }

  ngOnInit() {
    this.SongService.getSongs().subscribe(res => {
      this.songs = res;
    });
  }

  remove(item) {
    this.SongService.removeSong(item.id);
  }
}
