import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatCardsState } from '../reducers/chat-cards.reducer';

// Получаем основной селектор для фичи чат-карточек
export const selectChatCardsState =
  createFeatureSelector<ChatCardsState>('chatCards');

// Создаем селектор для получения всех карточек чата
export const selectAllChatCards = createSelector(
  selectChatCardsState,
  (state: ChatCardsState) => state.chatCards
);

// Создаем селектор для получения ошибки
export const selectChatCardsError = createSelector(
  selectChatCardsState,
  (state: ChatCardsState) => state.error
);
