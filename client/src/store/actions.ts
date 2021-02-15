import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  CounterActionTypes,
} from './types';

export const incrementCounter = (num: number): CounterActionTypes => ({
  type: INCREMENT_COUNTER,
  payload: num,
});

export const decrementCounter = (num: number): CounterActionTypes => ({
  type: DECREMENT_COUNTER,
  payload: num,
});

export const resetCounter = (): CounterActionTypes => ({
  type: RESET_COUNTER,
});

