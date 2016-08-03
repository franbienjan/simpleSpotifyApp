import { Page, ViewController, NavParams } from 'ionic-angular';
import { PlaylistService } from '../../../services/playlist_service';

import { Track } from '../../../models/track';
import { Playlist } from '../../../models/playlist';

/*
  Generated class for the PopupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/personal/popup/popup.html',
})
export class PopupPage {

  playlist: Playlist;
  tracks: Track[];

  constructor(private viewCtrl: ViewController, public playlistService: PlaylistService,
              public navParams: NavParams) {

    var index = this.navParams.get("index");
    this.playlist = this.playlistService.playlists[index];
    console.log(this.playlist.tracks[0]);
    //this.playlistService.playlists
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}
