export const DRINK_COFFEE = 'DRINK_COFFEE';
export const EAT_SNACK = 'EAT_SNACK';

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
