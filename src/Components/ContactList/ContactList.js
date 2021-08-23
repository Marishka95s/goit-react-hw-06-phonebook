import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-actions';
import styles from './ContactList.module.css';

export default function ContactList() { 
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    return(
    <ul className={styles.list}>
        {contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).map( ({ id, name, number }) => (
            <li key={id} className={styles.item}>
                <p className={styles.name}>{name}: <span>{number}</span></p>
                <button type="button" className={styles.btn} onClick={() => dispatch(contactsActions.deleteContact(id))}>Delete</button>
            </li>
        ) )
        }
    </ul>
)};
ContactList.propTypes = {
    id: PropTypes.any,
    name: PropTypes.string,
    number: PropTypes.string,
}


