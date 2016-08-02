import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlaylistService } from '../../services/playlist_service';

import { Track } from '../../models/track';
import { Playlist } from '../../models/playlist';
/*
  Generated class for the PersonalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/personal/personal.html',
})
export class PersonalPage {

  splashlogo = "https://spotifypresscom.files.wordpress.com/2015/01/spotify_logo_rgb_green.png";
  playlists = [];

  constructor(private nav: NavController, public playlistService: PlaylistService) {
    this.playlists = playlistService.playlists;
  }

  // Create new playlist
  createPlaylist() {
    var randomId: string = this.randomId();
    var playlist: Playlist = {
      "id": randomId,
      "name": "New",
    }
    this.playlistService.playlists.push(playlist);
  }

  // Edit playlist details
  editPlaylist(playlist: Playlist) {
    playlist.name = "Edited";
    this.playlistService.playlists.push(playlist);

  }
  // Generate random ID
  randomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

}
