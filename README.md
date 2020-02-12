# React useReducer

## useReducer

An alternative to useState. Accepts a reducer of type
`(state, action) => newState`, and returns the current
state paired with a dispatch method. (If you’re familiar
with Redux, you already know how this works.)

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter({initialState}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

# LAB - Application State

For this assignment, you will be refactoring an app that uses basic
state management into one that uses the more advanced reducer state
management system.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

### Connect to a store

For this assignment, you're going to take an existing application which
changes a face based based on button clicks.

* You've been provided starter code to work with
* use a reducer to manage state
* Remove the state declaration in the container
* extract code from `Moods.js` into the appropriate files
  * create actions, selectors, and reducers

###### Testing

* Tests **ARE** required for this lab

###### Stretch Goals:

* Add more moods

### Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
