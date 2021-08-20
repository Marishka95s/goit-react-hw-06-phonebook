import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import './App.css';

import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts});
  
  const [filter, setFilter] = useState('');
  const [totalContacts, setTotalContacts] = useState(0);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    setTotalContacts(contacts.length);
  }, [contacts]);

  const addContact = (name, number) => {
    const isInContacts = contacts.some(contact => contact.name === name)
    if (isInContacts) { alert(`${name} is already in contacts.`); return }

    if (name && number) {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
      setContacts(prevState => [contact, ...prevState]);
    }
  };

  const deleteContact = (contactId => {
    setContacts(prevContacts=>prevContacts.filter(contact => contact.id !== contactId))
  });

  const changeFilter = event => {
    setFilter(event.currentTarget.value)
  }

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const resultedVisibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);
    return resultedVisibleContacts;
  }  

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={addContact} />

      <h2>Contacts (total: {totalContacts}) </h2>
      <Filter value={filter} onChange={changeFilter}/>
      <ContactList contacts={visibleContacts()} onDeleteContact={deleteContact} />
    </div>        
  ); 
}

App.defaultProps = {
  totalContactsCount: null,
  visibleContacts: null,
}
App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
  ),
  filter: PropTypes.string,
  totalContactsCount: PropTypes.number,
  visibleContacts: PropTypes.number,
};
