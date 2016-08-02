import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SpotifyApi } from '../../providers/spotify-api/spotify-api';
import { Artist } from '../../models/artist';

import { AlbumsPage } from '../albums/albums';

/*
  Generated class for the ArtistsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/artists/artists.html',
  providers: [SpotifyApi]
})
export class ArtistsPage {

  artists: Artist[];
  noFollowers: string;
  defaultImage = "http://pixel.nymag.com/imgs/daily/vulture/2015/06/26/26-spotify.w529.h529.jpg";
  artistInput: string;

  constructor(public nav: NavController, private spotifyApi: SpotifyApi) {
    this.artistInput = "Random";
    this.searchArtist("year:1980-2016");
  }

  searchArtist (artistInput: string) {
    this.spotifyApi
      .loadArtist(artistInput)
      .then(artist => {
        this.artists = artist;
        console.log(this.artists);
      })
      .catch(err => {
        console.log("NO ARTISTS FOUND MGA BEH");
        this.noFollowers = null;
        //this.person = null;
        //this.person.display_name = "No users found."
      })
  }

  goToArtist (id: string) {
    this.nav.push(AlbumsPage, {
      id: id
    })
  }

  addQuotes (input: string) {
    return '"' + input + '"';
  }

}
