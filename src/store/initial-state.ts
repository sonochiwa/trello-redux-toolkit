interface IComments {
  id: string;
  text: string;
}

interface ICards {
  id: string;
  title: string;
  description: string;
  comments: IComments[];
}

interface ILists {
  id: string;
  title: string;
  cards: ICards[];
}

interface IState {
  username?: string;
  lists: ILists[];
}

const initialState: IState = {
  lists: [
    {
      id: '0',
      title: 'Todo',
      cards: [
        {
          id: '0',
          title: 'default card',
          description: 'my init description',
          comments: [
            { id: '0', text: 'first comment' },
            { id: '1', text: 'second comment' },
          ]
        }],
    },
  ],
}

export default initialState;