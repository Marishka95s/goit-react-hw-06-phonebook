import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

function App({ totalContacts }) {
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
  totalContacts: PropTypes.number,
  visibleContacts: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter,
    totalContacts: state.contacts.items.length,
}};

export default connect(mapStateToProps)(App);
