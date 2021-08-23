// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/contacts-reducer';

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    // devTools: true,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
