import { drinkCoffee, DRINK_COFFEE, EAT_SNACK, eatSnack } from './faceActions';


describe('face actions', () => {
  it('creates a DRINK_COFFEE action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({
      type: DRINK_COFFEE,
      text: 'Drink Coffee',
      stateName: 'coffees'
    });
  });

  it('creates a EAT_SNACK action', () => {
    const action = eatSnack();
    expect(action).toEqual({
      type: EAT_SNACK,
      text: 'Snack',
      stateName: 'snacks'
    });
  });

  it('creats a TAKE_NAP action', () => {
    const action = takeNap();
    expect(action).toEqual({
      type: TAKE_NAP,
      text: 'Nap',
      stateName: 'naps'
    })
  }
});
