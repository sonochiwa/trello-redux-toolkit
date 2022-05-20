import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initial-state';
import { v4 as uuidv4 } from 'uuid';
// import { ILogin, IDeleteList } from './action-types';

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {

    // login(state, action: PayloadAction<ILogin>) {
    login(state, action) {
      state.username = action.payload.username
    },

    addList(state, action: PayloadAction<any>) {
      state.lists.push({
        ...action.payload,
        id: uuidv4(),
        cards: []
      });
    },

    // deleteList(state, action: PayloadAction<IDeleteList>) {
    deleteList(state, action) {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },

    addCard(state, action) {
      if (action.payload.title !== "") {
        state.lists.find(list => list.id === action.payload.id)?.cards.push({
          ...action.payload,
          id: uuidv4(),
          comments: []
        })
      }
    },

    deleteCard(state, action) {
      for (const list of state.lists) {
        list.cards = list.cards.filter(card => card.id !== action.payload.id)
      }
    },

    updateCard(state, action: PayloadAction<any>) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.id) {
            card.title = action.payload.card
          }
        }
      }
    },

    updateTitle(state, action: PayloadAction<any>) {
      state.lists = state.lists.map(list => list.id === action.payload.id ? { ...list, ...action.payload } : list)
    },

    updateDescription(state, action: PayloadAction<any>) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.id) {
            card.description = action.payload.description
          }
        }
      }
    },

    addComment(state, action: PayloadAction<any>) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.cardId) {
            card.comments.unshift(
              {
                id: uuidv4(),
                text: action.payload.activitys
              }
            )
          }
        }
      }
    },

    deleteComment(state, action: PayloadAction<any>) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.cardId) {
            card.comments = card.comments.filter(comment => comment.id !== action.payload.id)
          }
        }
      }
    },

    updateComment(state, action: PayloadAction<any>) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          for (const comment of card.comments) {
            if (comment.id === action.payload.id) {
              comment.text = action.payload.edited
            }
          }
        }
      }
    },

  },
});

export const {
  login,
  addList,
  deleteList,
  addCard,
  deleteCard,
  updateCard,
  updateTitle,
  updateDescription,
  addComment,
  updateComment,
  deleteComment,
} = boardSlice.actions;

export default boardSlice.reducer;