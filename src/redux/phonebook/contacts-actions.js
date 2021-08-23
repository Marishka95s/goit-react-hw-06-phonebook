import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
// import ContactTypes from './contacts-types';

// const addContact = (name, number) => ({
//     type: ContactTypes.ADD,
//     payload: { 
//         id: shortid.generate(),
//         name,
//         number,
//     }
// });

// createAction(type, prepareAction)
const addContact = createAction('contacts/add', (name, number) => {    return { 
    payload: {
        id: shortid.generate(),
        name,
        number,
    }
  }
});

// const deleteContact = contactId => ({
//     type: ContactTypes.DELETE,
//     payload: contactId,
// });
const deleteContact = createAction('contacts/delete');

// const changeFilter = value => ({
//     type: ContactTypes.CHANGE_FILTER,
//     payload: value,
// });
const changeFilter = createAction('contscts/changeFilter');

const contactsActions = {
    addContact, 
    deleteContact, 
    changeFilter
  };

export default contactsActions;