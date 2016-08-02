import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SpotifyApi } from '../../providers/spotify-api/spotify-api';

/*
  Generated class for the SongsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/songs/songs.html',
})
export class SongsPage {

  albumID: string;

  constructor(private nav: NavController, navParams: NavParams, spotifyService: SpotifyApi) {
    this.albumID = navParams.get('id');

  }

}
