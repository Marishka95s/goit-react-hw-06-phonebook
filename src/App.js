import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

function App({ items }) {
  const [totalContacts, setTotalContacts] = useState(0);

  useEffect(() => {
    setTotalContacts(items.length);
  }, [items]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts (total: {totalContacts}) </h2>
      <Filter />
      <ContactList />
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

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    filter: state.contacts.filter,
}};

export default connect(mapStateToProps)(App);
