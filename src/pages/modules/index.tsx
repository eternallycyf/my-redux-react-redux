import React from 'react'
import { createStore } from './store';
import { themeReducer } from './reducer';
const store = createStore(themeReducer);

export { store };
