import reducer from './faceReducer';
import { drinkCoffee, eatSnack, takeNap } from '../actions/faceActions';

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

  it('handles the EAT_SNACK action', () => {
    const action = eatSnack();
    const initialState = { snacks: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ snacks: 2 });
  });

  it('handles the TAKE_NAP action', () => {
    const action = takeNap();
    const initialState = { naps: 1 };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ naps: 2 });
  });
});
