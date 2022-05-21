import { IInitialState } from './types'

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