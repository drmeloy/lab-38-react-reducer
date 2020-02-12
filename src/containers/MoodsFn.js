import React, { useReducer } from 'react';
import faceReducer from '../reducers/faceReducer';
import { getFace } from '../selectors/faceSelectors';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { allActions } from '../actions/faceActions';

const MoodsFn = () => {
  const [state, dispatch] = useReducer(faceReducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });
  const face = getFace(state);
  

  return (
    <>
      <Controls actions={controlActions} handleSelection={dispatch} />
      <Face emoji={face} />
    </>
  );
};

export default MoodsFn;