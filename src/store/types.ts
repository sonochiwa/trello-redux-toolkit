export interface IInitialState {
  username?: string;
  lists: ILists[];
};

interface ILists {
  id: string;
  title: string;
  cards: ICards[];
};

interface ICards {
  id: string;
  title: string;
  description: string;
  comments: IComments[];
};

interface IComments {
  id: string;
  text: string;
};

export interface ILogin {
  username: string;
}

export interface IAddList {
  title: string;
}

export interface IDeleteList {
  id: string;
}

export interface IAddCard {
  id: string;
  title: string;
  description: string;
}

export interface IDeleteCard {
  id: string;
}

export interface IUpdateCard {
  id: string;
  title: string;
}

export interface IUpdateTitle {
  id: string;
}

export interface IUpdateDescription {
  id: string;
  description: string;
}

export interface IAddComment {
  cardId: string;
  activitys: string;
}

export interface IDeleteComment {
  cardId: string;
  id: string;
}

export interface IUpdateComment {
  id: string;
  cardId: string;
  text: string;
}