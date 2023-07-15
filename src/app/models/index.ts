export type User = {
  id: string;
  image_url: string;
  name: string;
  email: string;
  school_id: string;
};

export type Class = {
  id: string;
  name: string;
  numOfStudent: number;
  numOfNote: number;
};

export type Note = {
  id: string;
  name: string;
  description: string;
  tags: Array<string>;
  numOfLike: number;
};

export type Comment = {
  id: string;
  user: {id: string; name: string};
  comment: string;
  like: number;
};
