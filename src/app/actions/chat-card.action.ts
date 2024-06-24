import { createAction, props } from '@ngrx/store';
import { ChatCards } from '../../types/ChatCards';

export const loadChatCards = createAction(
  '[Chat] Load Chat Cards',
  props<{ tab: string }>()
);
export const loadChatCardsSuccess = createAction(
  '[Chat] Load Chat Cards Success',
  props<{ chatCards: ChatCards[] }>()
);
export const loadChatCardsFailure = createAction(
  '[Chat] Load Chat Cards Failure',
  props<{ error: any }>()
);
