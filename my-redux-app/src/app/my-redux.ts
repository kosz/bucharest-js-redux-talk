import { counterReducer } from '../../../counter-reducer';
import { Observable } from '../../../observable';

let observable = new Observable();
let state = counterReducer(undefined, { type: new Date() });

export const store = {
  subscribe: observer => {
  },
  dispatch: action => {
  }
}
