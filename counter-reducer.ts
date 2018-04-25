interface CounterSliceShape {
  nr: number;
}

const INITIAL_STATE: CounterSliceShape = {
  nr: 0
} 

export function counterReducer(
  state: CounterSliceShape = INITIAL_STATE, 
  action) { 
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        nr: state.nr + 1  
      };
    case 'DECREMENT':
      return {
        ...state,
        nr: state.nr - 1
      };
    default:
      return state;
  }
}
