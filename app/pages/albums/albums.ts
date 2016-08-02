import { Component } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { SpotifyApi } from '../../providers/spotify-api/spotify-api';
import { Artist } from '../../models/artist';
import { Album } from '../../models/album';

import { SongsPage } from '../songs/songs';

/*
  Generated class for the AlbumsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/albums/albums.html',
  providers: [SpotifyApi]
})
export class AlbumsPage {

  artistId: string;
  artist: Artist = new Artist;
  noFollowers: number;
  albums: Album[];
  imgLen: string;

  constructor(private nav: NavController, navParams: NavParams, private spotifyApi: SpotifyApi) {
    this.artistId = navParams.get("id");

    this.spotifyApi
      .loadArtistDetails(this.artistId)
      .then(artist => {
        this.artist = artist;
        this.noFollowers = this.artist.followers.total;
        this.imgLen = this.artist.images[2].url;
      })
      .catch(err => {
        console.log("NO ARTISTS WEH FOUND MGA BEH");
        //this.person = null;
        //this.person.display_name = "No users found."
      })

    this.spotifyApi
      .loadArtistAlbums(this.artistId)
      .then(albums => {
        this.albums = albums;
      }).catch(err => {
      console.log("NO ALBUMS WEH FOUND MGA BEH");
      //this.person = null;
      //this.person.display_name = "No users found."
    })
  }

  goToAlbum(id: string) {
    console.log("Album ID: " + id);
    /*this.nav.push(SongsPage, {
      id: id
    });*/
  }

}
