import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-actions';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDeleteContact }) => (
    <ul className={styles.list}>
        {contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).map( ({ id, name, number }) => (
            <li key={id} className={styles.item}>
                <p className={styles.name}>{name}: <span>{number}</span></p>
                <button type="button" className={styles.btn} onClick={()=> onDeleteContact(id)}>Delete</button>
            </li>
        ) )
        }
    </ul>
);
ContactList.propTypes = {
    id: PropTypes.any,
    name: PropTypes.string,
    number: PropTypes.string,
}
// const visibleContacts = (items, filter) => items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});
const mapStateToProps = state => ({
    contacts: state.contacts.items,
    filter: state.contacts.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);