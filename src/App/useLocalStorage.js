import React from 'react';

function useLocalStorage(itemName, defaultItem) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ defaultItem }));

  const {
    item,
  } = state;

  // ACTION CREATORS
  const onSave = (newItem) => dispatch({
    type: actionTypes.save,
    payload: newItem,
  });

  const onInitialLoad = (initialLoad) => dispatch({
    type: actionTypes.initialLoad,
    payload: initialLoad,
  });

  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(defaultItem));
      parsedItem = defaultItem;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    onInitialLoad(parsedItem);
  }, [defaultItem, itemName]);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    onSave(newItem);
  };

  return { 
    item,
    saveItem,
  };
}

const initialState = ({ defaultItem }) => ({
  item: defaultItem,
});

const actionTypes = {
  save: 'SAVE',
  initialLoad: 'INITIAL_LOAD',
};

const reducerObject = (state, payload) => ({
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.initialLoad]: {
    ...state,
    item: payload,
  }
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };