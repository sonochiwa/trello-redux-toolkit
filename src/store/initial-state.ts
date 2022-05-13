interface IInitialState {
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

const initialState: IInitialState = {
  lists: [
    {
      id: '0',
      title: 'TODO',
      cards: [
        {
          id: '0',
          title: 'default card',
          description: 'default description',
          comments: [
            { id: '0', text: 'default comment' },
          ]
        }],
    },
    {
      id: '1',
      title: 'In Progress',
      cards: [],
    },
    {
      id: '2',
      title: 'Testing',
      cards: [],
    },
    {
      id: '3',
      title: 'Done',
      cards: [],
    },
  ],
};

export default initialState;