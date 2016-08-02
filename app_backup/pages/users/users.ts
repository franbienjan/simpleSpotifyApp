import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import Github Service
import {GithubUsers} from '../../providers/github-users/github-users';

// Import User model
import {User} from '../../models/user';

// Import User Details page
import {DetailsPage} from '../details/details';

/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [GithubUsers]
})
export class UsersPage {

  // Array of users (for User model)
  users: User[];

  constructor(public nav: NavController, private githubUsers: GithubUsers) {
    githubUsers
      .load()
      .then(users => this.users = users);
  }

  viewDetails(login) {
    this.nav.push(DetailsPage, {
      login: login
    });
  }

  search(login) {
    let term = login.target.value;

    // We will only perform the search if we have 3 or more characters
    if (term.trim() == '' || term.trim().length < 3) {
      // Get github users and assign to local artists's variable
      this.githubUsers
        .load()
        // Load original users in this case
        .then(users => this.users = users)
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(term)
        .then(users => this.users = users)
    }
  }

}
