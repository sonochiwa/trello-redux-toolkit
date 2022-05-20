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

// export interface ILogin {
//   username: string;
// }

// export interface IDeleteList {
//   id: string;
// }