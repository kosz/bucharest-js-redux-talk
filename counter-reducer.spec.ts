import { it, describe, expect } from './testing';
import { counterReducer } from './counter-reducer';

describe('counter reducer', function() {

  it('has a value of 0 by default', function() {
    let state = counterReducer(undefined, { type: new Date() });
    expect(state.nr).toEqual(0);
  });

  it('increments 1 when the INCREMENT action is received', () => {
    let state = counterReducer(undefined, { type: 'asdf' });
    let newState = counterReducer(state, { type: 'INCREMENT' });

    expect(newState.nr).toEqual(1);
  });

  it('increments 2 when the DECREMENT action is received', () => {
    let state = counterReducer(undefined, { type: 'asdf' });
    let newState = counterReducer(state, { type: 'DECREMENT' });

    expect(newState.nr).toEqual(-1);
  });

});
