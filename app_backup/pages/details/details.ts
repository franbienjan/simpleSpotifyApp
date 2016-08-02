import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import service
import {GithubUsers} from '../../providers/github-users/github-users';

// Import User model
import {User} from '../../models/user';

/*
  Generated class for the DetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/details/details.html',
  providers: [GithubUsers]
})
export class DetailsPage {

  user: User = new User;
  login: string;

  constructor(public nav: NavController, navParams: NavParams, githubUsers: GithubUsers) {
    this.login = navParams.get('login');

    // Get the artists details and log
    githubUsers.loadDetails(this.login)
      .then( user => this.user = user)
  }

}
