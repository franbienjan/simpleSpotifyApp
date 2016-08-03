import { Page, ViewController, NavParams } from 'ionic-angular';
import { PlaylistService } from '../../../services/playlist_service';

import { Track } from '../../../models/track';

/*
  Generated class for the PopupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/playlists/popup/popup.html',
})
export class PopupPage {

  playlists = [];
  track: Track;

  constructor(private viewCtrl: ViewController, public navParams: NavParams,
              public playlistService: PlaylistService) {

    this.track = this.navParams.get('track');
    this.playlists = this.playlistService.playlists;
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

  addToPlaylist(index) {
    // If existing in playlist, do not add!
    if (this.playlistService.playlists[index].tracks.indexOf(this.track) == -1)
      this.playlistService.playlists[index].tracks.push(this.track);
    else
      console.log("Already existing!");

    this.dismiss("done");
  }

  // Additional functions
  // TODO: Notification for successful track addition in playlist

}
