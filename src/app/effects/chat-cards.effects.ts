import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import {
  loadChatCards,
  loadChatCardsSuccess,
  loadChatCardsFailure,
} from '../actions/chat-card.action';

@Injectable()
export class ChatCardsEffects {
  loadChatCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChatCards),
      mergeMap(action =>
        this.apiService.getChatCards(action.tab).pipe(
          map(chatCards => loadChatCardsSuccess({ chatCards })),
          catchError(error => of(loadChatCardsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
