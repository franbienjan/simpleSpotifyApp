import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {User} from '../../models/user';
import {Artist} from '../../models/artist';
import {Album} from '../../models/album';
import {Track} from '../../models/track';
import {Info} from '../../models/info';

/*
  Generated class for the SpotifyApi provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SpotifyApi {

  constructor(private http: Http) {  }

  // Function to retrieve User details
  loadProfile (userProfile: string) {
      return new Promise<User>(resolve => {
        this.http.get(`https://api.spotify.com/v1/users/${userProfile}`)
          .map(res => <User>(res.json()))
          .subscribe(
            user => resolve(user),
            err => resolve(err),
            () => console.log("It is done")
          );
      });
  }

  // Function to retrieve Artist
  loadArtist (artistInput: string) {
    console.log(`https://api.spotify.com/v1/search?q=${artistInput}&type=artist`);
    return new Promise<Array<Artist>>(resolve => {
      this.http.get(`https://api.spotify.com/v1/search?q=${artistInput}&type=artist`)
        .map(res => <Array<Artist>>(res.json().artists.items))
        .subscribe(
          artist => {
            resolve(artist);
          },
          err => resolve(err),
          () => console.log("It is done")
        );
    });
  }

  // Function to retrieve Artist Details
  loadArtistDetails (artistId: string) {
    return new Promise<Artist>(resolve => {
      this.http.get(`https://api.spotify.com/v1/artists/${artistId}`)
        .map(res => <Artist>(res.json()))
        .subscribe(
          artist => {
            resolve(artist);
          },
          err => resolve(err),
          () => console.log("It is done")
        );
    });
  }

  // Function to retrieve Artist Albums
  loadArtistAlbums (artistId: string) {
    return new Promise<Array<Album>>(resolve => {
      this.http.get(`https://api.spotify.com/v1/artists/${artistId}/albums`)
        .map(res => <Array<Album>>(res.json().items))
        .subscribe(
          albums => {
            resolve(albums);
          },
          err => resolve(err),
          () => console.log("It is done")
        );
    });
  }

  // Function for generic search (might be adapted for all use)
  searchEntries (info: Info) {
    var url:string = "q=" + info.term + (info.year != "all" ? "%20year:" + info.year : "") + "&type="
      + (info.type.length > 1 ? info.type.join(',') : info.type[0]);
    console.log(url);

    return new Promise (resolve => {
      this.http.get(`https://api.spotify.com/v1/search?${url}`)
        .map(res => res.json())
        .subscribe(
          result => {
            if (info.type.indexOf("artist") != -1)
              var artists=<Array<Artist>>(result.artists.items);
            if (info.type.indexOf("track") != -1)
              var tracks=<Array<Track>>(result.tracks.items);
            if (info.type.indexOf("album") != -1)
              var albums=<Array<Album>>(result.albums.items);
            var output = {
              "artists": artists,
              "tracks": tracks,
              "albums": albums
            }
            resolve(output);
          },
          err => resolve(err),
          () => console.log("It is done")
        );
    });
  }

  // Function to retrieve Album's tracks
  /*loadAlbumTracks (albumId: string) {
    return new Promise<Array<Song>>(resolve => {
      this.http.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`)
        .map(res => <Array<Song>>(res.json().items))
        .subscribe(
          albums => {
            resolve(albums);
          },
          err => resolve(err),
          () => console.log("It is done")
        );
    });
  }*/
}

