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
