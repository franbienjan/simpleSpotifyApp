import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlbumsPage } from '../albums/albums';

import { SpotifyApi } from '../../providers/spotify-api/spotify-api';

import { Info } from '../../models/info';
import { Album } from '../../models/album';
import { Artist } from '../../models/artist';
import { Track } from '../../models/track';

/*
  Generated class for the PlaylistsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/playlists/playlists.html',
  providers: [SpotifyApi]
})
export class PlaylistsPage {

  info: Info = new Info;

  artists: Artist[];
  albums: Album[];
  tracks: Track[];
  defaultImage = "http://pixel.nymag.com/imgs/daily/vulture/2015/06/26/26-spotify.w529.h529.jpg";
  splashlogo = "https://spotifypresscom.files.wordpress.com/2015/01/spotify_logo_rgb_green.png";
  resizeLogo = false;

  constructor(private nav: NavController, private spotifyApi: SpotifyApi) {
    this.info.year = "all";
    this.info.type = ["artist"];
  }

  search() {
    this.resizeLogo = true;
    console.log(this.info);
    this.spotifyApi
      .searchEntries(this.info)
      .then(result => {
        this.retrieveData(result);
      })
  }

  retrieveData(result) {
    this.artists = result.artists;
    this.tracks = result.tracks;
    this.albums = result.albums;
  }

  goToArtist (id: string) {
    this.nav.push(AlbumsPage, {
      id: id
    })
  }

}
