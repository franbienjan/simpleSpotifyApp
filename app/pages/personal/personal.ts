import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';

import { PlaylistService } from '../../services/playlist_service';

import { PopupPage } from '../personal/popup/popup';

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
      var tracks: Track[] = [];
    var playlist: Playlist = {
      "id": randomId,
      "name": "New",
        "tracks": tracks
    }
    this.playlistService.playlists.push(playlist);
  }

  // Edit playlist details
  editPlaylist(index) {
    var playlistEdit = this.playlistService.playlists[index];
    playlistEdit.name = "Edited";
    this.playlistService.playlists[index] = playlistEdit;
  }

  // Delete playlist
    deletePlaylist(index) {
        this.playlistService.playlists.splice(index, 1);
    }

  // Generate random ID
  randomId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  // View Playlist's tracks
  viewPlaylist(index) {
      let playlistModal = Modal.create(PopupPage, {"index": index});
      this.nav.present(playlistModal);
  }

}
