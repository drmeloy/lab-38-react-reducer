export const DRINK_COFFEE = 'DRINK_COFFEE';
export const EAT_SNACK = 'EAT_SNACK';
export const TAKE_NAP = 'TAKE_NAP';
export const STUDY = 'STUDY';
export const EXERCISE = 'EXERCISE';

export const drinkCoffee = () => ({
  type: DRINK_COFFEE
});

export const eatSnack = () => ({
  type: EAT_SNACK
});

export const takeNap = () => ({
  type: TAKE_NAP
});

export const study = () => ({
  type: STUDY
});

export const exercise = () => ({
  type: EXERCISE
});

export const allActions = [drinkCoffee, eatSnack, takeNap, study, exercise];
