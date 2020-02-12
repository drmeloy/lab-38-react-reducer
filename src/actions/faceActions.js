export const DRINK_COFFEE = 'DRINK_COFFEE';
export const EAT_SNACK = 'EAT_SNACK';
export const TAKE_NAP = 'TAKE_NAP';
export const STUDY = 'STUDY';

export const drinkCoffee = () => ({
  type: DRINK_COFFEE,
  text: 'Drink Coffee',
  stateName: 'coffees'
});

export const eatSnack = () => ({
  type: EAT_SNACK,
  text: 'Snack',
  stateName: 'snacks'
});

export const takeNap = () => ({
  type: TAKE_NAP,
  text: 'Nap',
  stateName: 'naps'
});

export const study = () => ({
  type: STUDY,
  text: 'Study',
  stateName: 'studies'
});

export const allActions = [drinkCoffee, eatSnack, takeNap, study];
