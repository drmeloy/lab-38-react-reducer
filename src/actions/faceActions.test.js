import { drinkCoffee, DRINK_COFFEE, EAT_SNACK, eatSnack, TAKE_NAP, takeNap, STUDY, study, EXERCISE, exercise } from './faceActions';


describe('face actions', () => {
  it('creates a DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({
      type: DRINK_COFFEE
    });
  });

  it('creates a EAT_SNACK action', () => {
    const action = eatSnack();
    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

  it('creates a TAKE_NAP action', () => {
    const action = takeNap();
    expect(action).toEqual({
      type: TAKE_NAP
    });
  });

  it('creates a STUDY action', () => {
    const action = study();
    expect(action).toEqual({
      type: STUDY
    });
  });

  it('creates a EXERCISE action', () => {
    const action = exercise();
    expect(action).toEqual({
      type: EXERCISE
    });
  });
});
