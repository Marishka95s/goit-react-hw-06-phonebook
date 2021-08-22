import { combineReducers } from "redux";
import ContactsTypes from './contacts-types';

const initialContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
const loc = JSON.parse(window.localStorage.getItem('contacts'));
console.log(loc)
const items = (state = (JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts), { type, payload }) => {
    switch (type) {
        case ContactsTypes.ADD:
            const isInContacts = state.some(contact => contact.name === payload.name);
            if (isInContacts) { 
                alert(`${payload.name} is already in contacts.`); return state;
            }
            const renewableState = [...state, payload];
            window.localStorage.setItem('contacts', JSON.stringify(renewableState));             
            return renewableState; 
       
        case ContactsTypes.DELETE:
            const filtredState = state.filter(contact => contact.id !== payload)
            window.localStorage.setItem('contacts', JSON.stringify(filtredState));
            return filtredState;
    
        default:
            return state;
    }
};

const filter = (state = '', { type, payload }) => {
    switch (type) {
        case ContactsTypes.CHANGE_FILTER:                     
            return payload; 
       
        default:
            return state;
    }
};

export default combineReducers({ items, filter });