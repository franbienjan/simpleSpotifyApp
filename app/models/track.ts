export class Track {
  album: {
    album_type: string,
    external_urls: {spotify: string},
    href: string,
    id: string,
    images: [{height: number, url: string, width: number}],
    name: string,
    type: string,
    uri: string
  };
  artists: [{
    external_urls: {spotify: string},
    href: string,
    id: string,
    name: string,
    type: string,
    uri: string
  }];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {isrc: string};
  external_urls: {spotify: string};
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
