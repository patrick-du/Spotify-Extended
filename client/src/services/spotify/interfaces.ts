export interface ErrorObject {
  status: string;
  message: string;
}

interface ExternalUrlObject {
  spotify: string;
}

interface ExplicitContentSettingsObject {
  filter_enabled: boolean;
  filter_locked: boolean;
}

interface FollowersObject {
  href?: string;
  total: number;
}

interface ImageObject {
  height?: number;
  url: string;
  width?: number;
}

interface PublicUserObject {
  display_name?: string;
  external_urls: ExternalUrlObject;
  followers: FollowersObject;
  href: string;
  id: string;
  images: [ImageObject];
  type: string;
  uri: string;
}

interface PlaylistTracksRefObject {
  href: string;
  total: number;
}
export interface SimplifiedPlaylistObject {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrlObject;
  href: string;
  id: string;
  images: [ImageObject];
  name: string;
  owner: PublicUserObject;
  public?: boolean;
  snapshot_id: string;
  tracks?: PlaylistTracksRefObject;
  type: string;
  uri: string;
}
export interface PagingObject {
  href: string;
  items: [SimplifiedPlaylistObject];
  limit: number;
  next?: string;
  previous?: string;
  total: number;
}

export interface PrivateUserObject {
  country: string;
  display_name?: string;
  email: string;
  explicit_content: ExplicitContentSettingsObject;
  external_urls: ExternalUrlObject;
  followers: FollowersObject;
  href: string;
  id: string;
  images: [ImageObject];
  product: string;
  type: string;
  uri: string;
}
