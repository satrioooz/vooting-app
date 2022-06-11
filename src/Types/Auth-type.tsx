export interface IAuth {
  email: string;
  password: string;
}

export interface IDataAuth {
  refreshToken: string | null;
  email: string | null;
  uid: string | null;
}

export interface IDataVote {
  _id: number;
  name: string;
  logo: string;
  votes: number;
}
