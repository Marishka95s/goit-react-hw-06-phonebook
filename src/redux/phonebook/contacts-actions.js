import ContactTypes from './contacts-types';
import shortid from 'shortid';

const addContact = (name, number) => ({
    type: ContactTypes.ADD,
    payload: { 
        id: shortid.generate(),
        name,
        number,
    }
});

const deleteContact = contactId => ({
    type: ContactTypes.DELETE,
    payload: contactId,
});

const changeFilter = value => ({
    type: ContactTypes.CHANGE_FILTER,
    payload: value,
});

const contactsActions = {
    addContact, 
    deleteContact, 
    changeFilter
  };

export default contactsActions;