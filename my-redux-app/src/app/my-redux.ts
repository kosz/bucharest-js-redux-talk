import { counterReducer } from '../../../counter-reducer';
import { Observable } from '../../../observable';

let observable = new Observable();
let state = counterReducer(undefined, { type: new Date() });

export const store = {
  subscribe: observer => {
    observable.push(observer);
    observer(state);
  },
  dispatch: action => {
    let newState = counterReducer(state, action);
    if(newState !== state) {
      state = newState;
      observable.nextValue(state);
    }
  }

}
