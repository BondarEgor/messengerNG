import { createReducer, on, Action } from '@ngrx/store';
import {
  loadChatCardsSuccess,
  loadChatCardsFailure,
} from '../actions/chat-card.action';
import { ChatCards } from '../../types/ChatCards';

export interface ChatCardsState {
  chatCards: ChatCards[];
  error: any;
}

export const initialState: ChatCardsState = {
  chatCards: [],
  error: null,
};

const _chatCardsReducer = createReducer(
  initialState,
  on(loadChatCardsSuccess, (state, { chatCards }) => ({ ...state, chatCards })),
  on(loadChatCardsFailure, (state, { error }) => ({ ...state, error }))
);

export function chatCardsReducer(
  state: ChatCardsState | undefined,
  action: Action
) {
  return _chatCardsReducer(state, action);
}
