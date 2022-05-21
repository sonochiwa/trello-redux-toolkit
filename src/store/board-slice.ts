import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initial-state';
import { v4 as uuidv4 } from 'uuid';
import { ILogin, IAddList, IDeleteList, IAddCard, IDeleteCard, IUpdateCard, IUpdateTitle, IUpdateDescription, IAddComment, IDeleteComment, IUpdateComment } from './types';

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {

    login(state, action: PayloadAction<ILogin>) {
      state.username = action.payload.username;
    },

    addList(state, action: PayloadAction<IAddList>) {
      state.lists.push({
        id: uuidv4(),
        title: action.payload.title,
        cards: []
      });
    },

    deleteList(state, action: PayloadAction<IDeleteList>) {
      state.lists = state.lists.filter(list => list.id !== action.payload.id);
    },

    addCard(state, action: PayloadAction<IAddCard>) {
      if (action.payload.title !== "") {
        state.lists.find(list => list.id === action.payload.id)?.cards.push({
          ...action.payload,
          id: uuidv4(),
          comments: [],
        })
      }
    },

    deleteCard(state, action: PayloadAction<IDeleteCard>) {
      for (const list of state.lists) {
        list.cards = list.cards.filter(card => card.id !== action.payload.id)
      }
    },

    updateCard(state, action: PayloadAction<IUpdateCard>) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.id) {
            card.title = action.payload.title
          }
        }
      }
    },

    updateTitle(state, action: PayloadAction<IUpdateTitle>) {
      state.lists = state.lists.map(list => list.id === action.payload.id ? { ...list, ...action.payload } : list)
    },

    updateDescription(state, action: PayloadAction<IUpdateDescription>) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.id) {
            card.description = action.payload.description
          }
        }
      }
    },

    addComment(state, action: PayloadAction<IAddComment>) {
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

    deleteComment(state, action: PayloadAction<IDeleteComment>) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.cardId) {
            card.comments = card.comments.filter(comment => comment.id !== action.payload.id)
          }
        }
      }
    },

    updateComment(state, action: PayloadAction<IUpdateComment>) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          for (const comment of card.comments) {
            if (comment.id === action.payload.id) {
              comment.text = action.payload.text
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