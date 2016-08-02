import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SpotifyApi } from '../../providers/spotify-api/spotify-api';
import { User } from '../../models/user';

/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [SpotifyApi]
})
export class UsersPage {

  person: User = new User;
  imgDp: any;
  noFollowers: string;
  userInput: string;

  constructor(private nav: NavController, public spotifyService: SpotifyApi) {
    this.searchProfile('12168728229');
  }

  // Function to trigger spotify search user module
  searchProfile(searchTerm: string) {
    this.spotifyService
      .loadProfile(searchTerm)
      .then(user => {
        this.person = user;
        this.imgDp = this.person.images[0].url;
        this.noFollowers = this.person.followers.total + " followers";
      })
      .catch(err => {
        console.log("NO USERS FOUND MGA BEH");
        this.noFollowers = null;
        this.imgDp = null;
        //this.person = null;
        //this.person.display_name = "No users found."
      })


  }


}
