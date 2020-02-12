import reducer from './faceReducer';
import { drinkCoffee } from '../actions/faceActions';

describe('face reducer', () => {
  it('does nothing when given an unexpected action', () => {
    const action = { type: 'UNEXPECTED' };
    const newState = reducer({}, action);
    expect(newState).toEqual({});
  });

  it('handles the DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ coffees: 1 });
  });
});
