interface AsyncStatus {
  status: string;
  error: string | null;
}
interface IAuthState extends AsyncStatus {
  tokens: {
    accessToken?: string;
    refreshToken?: string;
  };
}
interface IUserState extends AsyncStatus {
  user: {
    id?: string;
    name?: string;
    email?: string;
    followers?: number;
    image?: string;
  };
}
export type { IAuthState, IUserState };
