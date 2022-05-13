import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";
import { v4 as uuidv4 } from 'uuid';

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addList(state, action) {
      state.lists.push({
        ...action.payload,
        id: uuidv4(),
        cards: []
      });
    },

    removeList(state, action) {
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

    removeCard(state, action) {
      for (const list of state.lists) {
        list.cards = list.cards.filter(card => card.id !== action.payload.id)
      }
    },

    editCard(state, action) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.id) {
            card.title = action.payload.card
          }
        }
      }
    },

    editTitle(state, action) {
      state.lists = state.lists.map(list => list.id === action.payload.id ? { ...list, ...action.payload } : list)
    },

    editDescription(state, action) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.id) {
            card.description = action.payload.description
          }
        }
      }
    },

    sendComment(state, action) {
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

    deleteComment(state, action) {
      for (const list of state.lists) {
        for (const card of list.cards) {
          if (card.id === action.payload.cardId) {
            card.comments = card.comments.filter(comment => comment.id !== action.payload.id)
          }
        }
      }
    },

    editComment(state, action) {
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

    login(state, action) {
      state.username = action.payload.username
    }
  },
});

export const { addList, removeList, addCard, removeCard, editCard, login, editTitle, editDescription, sendComment, editComment, deleteComment } = boardSlice.actions;

export default boardSlice.reducer;