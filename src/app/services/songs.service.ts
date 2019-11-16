import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/* Ari Martelius (1800582), Tommi Ralli (1800583) */
export interface Song {
  id?: string;
  song: string;
  artist: string;
  priority: number;
  notes: string;
  createdAt: number;
}
@Injectable({
  providedIn: 'root'
})

/* Song service to use database */
export class SongsService {
  private songsCollection: AngularFirestoreCollection<Song>;

  private songs: Observable<Song[]>;

  constructor(db: AngularFirestore) {
    this.songsCollection = db.collection<Song>('songs');

    this.songs = this.songsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  getSongs() {
    return this.songs;
  }

  getSong(id) {
    return this.songsCollection.doc<Song>(id).valueChanges();
  }

  updateSong(song: Song, id: string) {
    return this.songsCollection.doc(id).update(song);
  }

  addSong(song: Song) {
    return this.songsCollection.add(song);
  }

  removeSong(id) {
    return this.songsCollection.doc(id).delete();
  }
}
