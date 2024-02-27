export enum VoteType {
  Like,
  Dislike,
  Fav,
}

export interface VoteData {
  image_id: string;
  sub_id: string;
  value: 1 | -1;
}

export interface FavData {
  image_id: string;
  sub_id?: string;
}

export interface VoteCreateRes {
  message: string;
  id: number;
  image_id: string;
  sub_id: string;
  value: number;
  country_code: string;
}

export interface VoteRes {
  country_code: string;
  created_at: string;
  id: number;
  image: { id: string; url: string };
  image_id: string;
  sub_id: string;
  value: number;
}

export interface FavouriteRes extends Omit<VoteRes, "value"> {
  user_id: string;
}

export interface FavouriteCreateRes {
  message: string;
  id: number;
}

export interface FavouriteDeleteRes {
  message: string;
}

export interface FavHistory {
  action: string;
  id: string;
  created_at: string;
}
